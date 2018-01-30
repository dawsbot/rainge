import test from 'ava';
import rainge from './';

const currentYear = (new Date()).getFullYear();
test('valid args', t => {
  t.throws(() => {
    rainge(false);
  }, TypeError);
});

test('date in the past', t => {
  t.is(rainge('1999'), `1999 - ${currentYear}`);
  t.is(rainge(1999), `1999 - ${currentYear}`);
});

test('current year', t => {
  t.is(rainge(currentYear), `${currentYear}`);
  t.is(rainge(Number(currentYear)), `${currentYear}`);
});
