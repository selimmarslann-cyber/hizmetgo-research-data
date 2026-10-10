const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = __dirname;
const rawPath = path.join(root, 'autumn-trends-raw-safe.json');
const rawText = fs.readFileSync(rawPath, 'utf8');
const raw = JSON.parse(rawText);
assert.equal(raw.status, 'complete');
const mean = values => values.reduce((a, b) => a + b, 0) / values.length;
const median = values => { const sorted = [...values].sort((a, b) => a - b); const mid = Math.floor(sorted.length / 2); return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2; };
const WEEK = 7 * 24 * 60 * 60;
const periodStart = Date.parse('2021-10-01T00:00:00Z') / 1000;
const periodEndExclusive = Date.parse('2026-10-01T00:00:00Z') / 1000;
const rows = [];
const analysis = raw.series.map(item => {
  // Exclude any weekly interval touching a day outside the requested period.
  // A missing observation is never converted into a zero.
  const points = item.points.filter(point => point.hasData === true && point.isPartial === false && point.timestamp >= periodStart && point.timestamp + WEEK <= periodEndExclusive);
  assert.equal(new Set(points.map(point => point.timestamp)).size, points.length);
  const excluded = item.points.filter(point => !points.includes(point));
  const years = [2022, 2023, 2024, 2025].map(year => {
    const months = [8, 9, 10].map(month => {
      const selected = points.filter(point => { const date = new Date(point.timestamp * 1000); return date.getUTCFullYear() === year && date.getUTCMonth() === month; });
      assert.ok(selected.length >= 4 && selected.length <= 5);
      return { month: month + 1, weekStartObservations: selected.length, meanRelativeInterest: mean(selected.map(point => point.value)) };
    });
    const september = months[0].meanRelativeInterest;
    const october = months[1].meanRelativeInterest;
    const november = months[2].meanRelativeInterest;
    assert.ok(september > 0 && october > 0);
    const row = { term: item.term, year, months, octoberToSeptember: october / september, novemberToOctober: november / october };
    rows.push(row);
    return row;
  });
  const ramps = years.map(year => year.octoberToSeptember);
  const plateaus = years.map(year => year.novemberToOctober);
  return { term: item.term, downloadedObservations: item.points.length, eligibleFullWeeks: points.length, excludedWeeks: excluded, autumnYears: years, pairedYears: years.length, autumnObservations: years.flatMap(year => year.months).reduce((sum, month) => sum + month.weekStartObservations, 0), octoberToSeptember: { median: median(ramps), min: Math.min(...ramps), max: Math.max(...ramps), rises: ramps.filter(value => value > 1).length }, novemberToOctober: { median: median(plateaus), min: Math.min(...plateaus), max: Math.max(...plateaus) } };
});
const output = {
  schemaVersion: 1, analysisDate: '2026-10-11', computedAt: new Date().toISOString(), source: raw.source,
  inputSha256: crypto.createHash('sha256').update(rawText).digest('hex'), collectionOptions: raw.options,
  measurement: 'Google Trends relative Web Search interest in Turkey, term independently normalized 0-100',
  primaryWindow: '2022-09-01/2025-11-30: September, October, November of four complete paired autumns; weekly points assigned by UTC start month',
  denominator: 'For each term and year: October weekly-start mean / September weekly-start mean. November mean / October mean separately. Median over four within-year ratios.',
  uncertainty: 'One Google Trends sample; no user/query count, sampling probability, or population confidence interval supplied. Four-year range is descriptive sensitivity, not a confidence interval.',
  monthlyBoundaryRule: 'Weekly value is allocated to its UTC start month; it covers seven days and may include adjacent-month days. Whole weeks outside the five-year requested window are excluded.',
  terms: analysis,
};
fs.writeFileSync(path.join(root, 'autumn-analysis.json'), JSON.stringify(output, null, 2) + '\n');
const headers = 'term,year,september_mean,september_weeks,october_mean,october_weeks,november_mean,november_weeks,october_to_september,november_to_october';
const lines = rows.map(row => [row.term, row.year, ...row.months.flatMap(month => [month.meanRelativeInterest, month.weekStartObservations]), row.octoberToSeptember, row.novemberToOctober].join(','));
fs.writeFileSync(path.join(root, 'autumn-paired-years.csv'), headers + '\n' + lines.join('\n') + '\n');
console.log(JSON.stringify({ analysisDate: output.analysisDate, inputSha256: output.inputSha256, terms: analysis.map(({ term, pairedYears, autumnObservations, octoberToSeptember, novemberToOctober }) => ({ term, pairedYears, autumnObservations, octoberToSeptember, novemberToOctober })) }, null, 2));
