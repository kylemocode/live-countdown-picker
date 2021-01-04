import * as T from './types';
import { NextRouter } from 'next/router';

export const origin = `https://live-countdown-picker.vercel.app`;

export const siteMetaGenerator = (_ctx: unknown, router: NextRouter): T.IMeta => ({
  title: 'Live Countdown Picker',
  description: '一個再普通不過的抽獎工具。',
  ogType: T.MetaOgType.website,
  canonicalPath: router.asPath,
});
