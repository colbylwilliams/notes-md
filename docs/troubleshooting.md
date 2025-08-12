# Troubleshooting

Common issues and solutions for developing and deploying Notes MD.

## Development Issues

### Frontend Issues

#### Build Errors

**TypeScript Compilation Errors**
```bash
# Common error: Type errors during build
cd web
npm run build
```
*Solutions:*
- Check `web/tsconfig.json` configuration
- Ensure all TypeScript files have proper type annotations
- Update `@types/` packages if needed
- Run `npx tsc --noEmit` to check types without building

**Vite Build Failures**
```
Error: Build failed with errors
```
*Solutions:*
- Clear Vite cache: `rm -rf web/node_modules/.vite`
- Delete and reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`
- Check for syntax errors in imported files
- Verify all imports use correct paths and extensions

**Dependency Conflicts**
```
ERESOLVE unable to resolve dependency tree
```
*Solutions:*
- Use `npm install --legacy-peer-deps`
- Update to compatible package versions
- Check for duplicate package installations
- Consider using `npm overrides` in package.json

#### Runtime Errors

**Component Rendering Issues**
```
Error: Cannot read property 'map' of undefined
```
*Solutions:*
- Add null/undefined checks: `notes?.map()` or `notes || []`
- Ensure proper state initialization in components
- Check data loading states and provide loading indicators
- Verify API responses match expected data structures

**localStorage Issues**
```
QuotaExceededError: Failed to execute 'setItem' on 'Storage'
```
*Solutions:*
- Implement localStorage size limits in NotesService
- Add error handling for storage operations
- Consider implementing data cleanup/archiving
- Use try-catch blocks around localStorage operations

**API Connection Failures**
```
TypeError: Failed to fetch
```
*Solutions:*
- Verify API server is running on port 3000
- Check CORS configuration in API
- Ensure correct API URL in requests
- Check browser network tab for detailed error information

#### Styling Issues

**Material-UI Theming Problems**
```
MUI: The key `primary` provided to the palette is not valid
```
*Solutions:*
- Check theme configuration in App.tsx
- Verify Material-UI version compatibility
- Use proper theme structure from MUI documentation
- Test theme changes in browser dev tools

**Responsive Design Issues**
*Solutions:*
- Use Material-UI breakpoints: `theme.breakpoints.down('md')`
- Test on different screen sizes using browser dev tools
- Check CSS Grid and Flexbox implementations
- Verify mobile viewport meta tag in index.html

### Backend Issues

#### Server Startup Issues

**Port Already in Use**
```
Error: listen EADDRINUSE: address already in use :::3000
```
*Solutions:*
- Find process using port: `lsof -i :3000` (macOS/Linux) or `netstat -ano | findstr :3000` (Windows)
- Kill process: `kill -9 <PID>` or use Task Manager
- Change port in `.env` file: `PORT=3001`
- Use different port: `PORT=8080 npm run dev`

**Environment Variable Problems**
```
TypeError: Cannot read property 'PORT' of undefined
```
*Solutions:*
- Create `.env` file in `api/` directory
- Ensure `dotenv.config()` is called before accessing `process.env`
- Check `.env` file syntax (no spaces around =)
- Verify `.env` is not in `.gitignore` if needed for development

**Dependency Installation Failures**
```
npm ERR! peer dep missing
```
*Solutions:*
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version compatibility (v20+ required)
- Use `npm install --legacy-peer-deps` if needed

#### API Errors

**CORS Configuration Issues**
```
Access to fetch at 'http://localhost:3000' from origin 'http://localhost:5173' has been blocked by CORS policy
```
*Solutions:*
- Verify CORS is enabled in `api/src/index.ts`: `app.use(cors())`
- Check if frontend URL is allowed in CORS config
- Add specific origin: `app.use(cors({ origin: 'http://localhost:5173' }))`
- Restart API server after CORS changes

**Request Validation Failures**
```
400 Bad Request: Invalid note data
```
*Solutions:*
- Check request body format matches API expectations
- Verify Content-Type header is set to `application/json`
- Ensure all required fields are included in requests
- Add validation middleware using express-validator

**Memory Issues with In-Memory Storage**
```
JavaScript heap out of memory
```
*Solutions:*
- Implement note limits in controllers (max 1000 notes)
- Add memory usage monitoring
- Consider switching to file-based or database storage
- Restart API server to clear memory

## Deployment Issues

### Docker Issues

**Build Failures**
```
Error: COPY failed: file not found
```
*Solutions:*
- Verify Dockerfile paths are correct
- Check if files exist in build context
- Ensure `.dockerignore` doesn't exclude needed files
- Use `docker build --no-cache` to rebuild from scratch

**Container Startup Issues**
```
Container exits immediately with code 0
```
*Solutions:*
- Check container logs: `docker logs <container-name>`
- Verify CMD/ENTRYPOINT instructions in Dockerfile
- Ensure proper Node.js startup command
- Check if application crashes on startup

**Network Connectivity**
```
Cannot reach API from frontend container
```
*Solutions:*
- Use service names in docker-compose networks
- Check port mappings in docker-compose.yml
- Verify containers are on same network
- Use container-to-container communication (not localhost)

### Cloud Platform Issues

**Vercel Deployment Failures**
```
Build failed: Command "npm run build" exited with 1
```
*Solutions:*
- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json (not devDependencies)
- Ensure TypeScript types are properly defined
- Check Node.js version compatibility

**Railway/Render API Issues**
```
Service failed to start
```
*Solutions:*
- Check service logs in platform dashboard
- Verify PORT environment variable is used correctly
- Ensure all dependencies are installed
- Check memory limits and upgrade plan if needed

**Environment Variable Configuration**
```
Application starts but features don't work
```
*Solutions:*
- Verify all required environment variables are set
- Check variable names match exactly (case-sensitive)
- Ensure values don't contain special characters without escaping
- Test locally with same environment variables

## Common Error Messages

### "Module not found" errors
```
Cannot resolve module 'react-markdown'
```
*Solutions:*
- Install missing package: `npm install react-markdown`
- Check import paths are correct
- Verify package is in correct package.json file
- Clear node_modules and reinstall if package exists

### "Port already in use" errors
*Find and kill processes:*
```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### "CORS policy" errors
*Development setup:*
```javascript
// In api/src/index.ts
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
```

## Testing Issues

### Test Environment Setup
```
Error: Test suite failed to run
```
*Solutions:*
- Verify test configuration in `vitest.config.ts` (frontend) or `jest.config.js` (API)
- Install test dependencies: `npm install --save-dev`
- Check TypeScript configuration for test files
- Ensure test files follow naming convention (`.test.ts` or `.spec.ts`)

### Mock Configuration
```
Cannot mock ES module imports
```
*Solutions:*
- Use dynamic imports for modules that need mocking
- Configure Vitest with proper ES module handling
- Check mock syntax matches testing framework requirements
- Verify mock files are in correct location (`__mocks__/`)

### Test Data Management
*Solutions:*
- Use test fixtures for consistent data
- Clear localStorage between frontend tests
- Reset in-memory data before each API test
- Use test-specific data that doesn't conflict

## Performance Problems

### Frontend Performance

**Bundle Size Analysis**
```bash
cd web
npm run build
# Check dist/ folder size and analyze bundle
```
*Solutions:*
- Use dynamic imports for large components: `React.lazy()`
- Remove unused dependencies
- Optimize Material-UI imports: import individual components
- Use Vite bundle analyzer plugins

**Memory Leaks**
*Solutions:*
- Use React DevTools Profiler to identify issues
- Cleanup event listeners in useEffect cleanup functions
- Avoid creating objects in render methods
- Use React.memo for expensive components

### API Performance

**Slow Response Times**
*Solutions:*
- Profile code using Node.js built-in profiler
- Optimize search algorithms for large note sets
- Add response caching for frequently accessed data
- Consider pagination for large result sets

**High Memory Usage**
*Solutions:*
- Monitor in-memory notes array size
- Implement note count limits
- Add garbage collection monitoring
- Consider streaming for large data operations

## Browser Compatibility

### Safari Issues
- **localStorage:** Safari has stricter storage policies in private mode
- **ES Modules:** Ensure Vite targets appropriate browser versions
- **CSS Features:** Test modern CSS features in Safari

### Mobile Browser Issues
- **Viewport:** Check responsive design on actual devices
- **Touch Events:** Ensure proper touch event handling
- **Performance:** Test on lower-powered mobile devices

## Getting Additional Help

### Escalation Paths
1. **Check Documentation:** Review `/docs` folder for detailed information
2. **Search Issues:** Look for similar problems in GitHub Issues
3. **Create Issue:** File new bug report with reproduction steps
4. **Community Discussion:** Use GitHub Discussions for questions

### Debug Information to Include
- Node.js version (`node --version`)
- npm version (`npm --version`)
- Operating System and version
- Browser and version (for frontend issues)
- Error messages and stack traces
- Steps to reproduce the issue

## Debug Mode

### Enable Development Logging
```javascript
// Frontend: Add to App.tsx
console.log('Debug mode enabled');

// API: Add to index.ts
if (process.env.NODE_ENV === 'development') {
  console.log('API Debug mode enabled');
}
```

### Browser Developer Tools
- **Console:** Check for error messages and warnings
- **Network:** Monitor API requests and responses
- **Application:** Inspect localStorage data
- **Performance:** Profile rendering and memory usage

### API Debugging
```bash
# Add debug logging to API
cd api
DEBUG=* npm run dev
```