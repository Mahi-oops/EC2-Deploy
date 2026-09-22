const BASE_URL = "http://127.0.0.1:3000";

async function runContractTest() {
  console.log("Running API contract test...");

  const response = await fetch(`${BASE_URL}/api/health`);

  if (response.status !== 200) {
    throw new Error(
      `Contract failed: expected HTTP 200, received HTTP ${response.status}`
    );
  }

  const body = await response.json();

  console.log("Received response:");
  console.log(JSON.stringify(body, null, 2));

  // Contract: status must exist and be "healthy"
  if (body.status !== "healthy") {
    throw new Error(
      `Contract failed: expected status="healthy", received "${body.status}"`
    );
  }

  // Contract: service must exist and have the expected value
  if (body.service !== "devops-traveller-backend") {
    throw new Error(
      `Contract failed: expected service="devops-traveller-backend", received "${body.service}"`
    );
  }

  console.log("=================================");
  console.log("CONTRACT TEST PASSED");
  console.log("=================================");
}

runContractTest().catch((error) => {
  console.error("=================================");
  console.error("CONTRACT TEST FAILED");
  console.error("=================================");
  console.error(error.message);
  process.exit(1);
});