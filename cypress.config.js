import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '13jtk2',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {},
  },
});
