import { test, expect } from "@playwright/test";

// these test cases will be running in sequence order
test.describe.serial(() => {
  test("Home page Test", async () => {
    console.log("Home page test");
  });

  test("Search Product Test", async () => {
    console.log("Search Product test");
  });

  test("cart Product Test", async () => {
    console.log("cart Product test");
  });

  test("order Product Test", async () => {
    console.log("order Product test");
  });

  test("checkout Product Test", async () => {
    console.log("checkout Product test");
  });
});

//these two test case will be running in parallel
test("Hello Test", async () => {
    console.log("Hello");
  });  
test("Bye Test", async () => {
    console.log("BYE!!");
  });