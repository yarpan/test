import { test, expect } from '@playwright/test';


test('test just with name @Tf94d0f06', async ({ page }) => { console.log("TEST"); });

test('test number five @T14d44b52', async ({ page }) => { console.log("TEST"); });

test('test with internal id updated @T5a8a1ba9', async ({ page }) => {   console.log("TEST"); });

test('test number one updated @Tecf65536', async ({ page }, testInfo) => {
  testInfo.annotations.push({ type: 'Testomat', description: 'T0c58ebe1' });

  console.log("TEST");
});

test('test number 100500 @T06259d37', async ({ page }) => { console.log("TEST"); });