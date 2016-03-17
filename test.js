import test from 'ava';
import rainge from './';

test('valid args', t => {
  t.throws(() => {
    rainge(false);
  }, TypeError);
});

test('date in the past', t => {
  t.is(rainge('1999'), `1999 - 2016`);
  t.is(rainge(1999), `1999 - 2016`);
});

test('current year', t => {
  const currentYear = (new Date()).getFullYear();
  t.is(rainge(currentYear), `${currentYear}`);
  t.is(rainge(Number(currentYear)), `${currentYear}`);
});
