import test from 'ava';
import rainger from './';

test('valid args', t => {
  t.throws(() => {
    rainger(false);
  }, TypeError);
});

test('date in the past', t => {
  t.is(rainger('1999'), `1999 - 2016`);
  t.is(rainger(1999), `1999 - 2016`);
});

test('current year', t => {
  const currentYear = (new Date()).getFullYear();
  t.is(rainger(currentYear), `${currentYear}`);
  t.is(rainger(Number(currentYear)), `${currentYear}`);
});
