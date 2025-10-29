# Initial Prompt
I have placed the login.vue component under layers/auth/app/pages but it doesn't seem to be picked up as a page from the nuxt-app-starter nuxtjs4 project. Use the playwright mcp server to check http://localhost:6018/login and make necessary changes until the route is reacheable. The idea is to have the login page available by default from the auth layer so every implementing app has its barebones login page.

# Plan
1. Use the Playwright MCP server to load `http://localhost:6018/login` and confirm the current 404 state.
2. Update the shared layers so the configured login path is excluded from content middleware handling, ensuring the auth layer page mounts across consuming apps.
3. Re-run the Playwright check to verify the route renders the login form, then capture the required documentation updates.

# Implementation Summary
Excluded the configured auth login path from content-based routing by injecting it into ignored prefixes and shipping an auth-layer plugin to seed manual lists, restoring the shared login.vue page across apps.

# Next Steps
- If any app overrides `runtimeConfig.public.authLoginPath`, smoke-test the new URL to confirm the middleware skip works end-to-end.
- Consider extending E2E coverage to assert the login page stays reachable while content-driven routes continue to function.
