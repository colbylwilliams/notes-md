# Troubleshooting

## Common Issues and Solutions

### Installation Issues

#### Node.js Version Compatibility

**Problem**: Application fails to start due to Node.js version mismatch

**Solution**:
- Ensure you have Node.js v14 or higher installed
- Check your version: `node --version`
- Update Node.js if needed: [nodejs.org](https://nodejs.org/)

#### Port Already in Use

**Problem**: Error "EADDRINUSE: address already in use"

**Solution**:
- Frontend (port 5173): Change port in `vite.config.ts`
- Backend (port 3000): Set `PORT` environment variable
- Or kill the process using the port: `lsof -ti:3000 | xargs kill`

#### Package Installation Failures

**Problem**: `npm install` fails with permission or network errors

**Solutions**:
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then reinstall
- Check network connectivity and proxy settings
- Try using yarn instead: `yarn install`

### Runtime Issues

#### API Connection Failed

**Problem**: Frontend can't connect to API

**Troubleshooting steps**:
1. Verify API is running: Check `http://localhost:3000`
2. Check `VITE_API_URL` environment variable
3. Verify CORS configuration
4. Check browser network tab for error details

#### Notes Not Persisting

**Problem**: Notes disappear after page refresh

**Explanation**: Currently using in-memory storage - this is expected behavior

**Future solution**: Database integration planned

#### Dark Mode Not Working

**Problem**: Dark mode toggle doesn't work

**Troubleshooting steps**:
1. Check browser console for JavaScript errors
2. Verify Material UI theme provider is working
3. Check local storage for theme preference

### Development Issues

#### TypeScript Compilation Errors

**Problem**: Type errors preventing build

**Solutions**:
- Check TypeScript configuration files
- Ensure all dependencies have type definitions
- Update `@types/*` packages
- Run `tsc --noEmit` to check types without building

#### ESLint/Prettier Conflicts

**Problem**: Code formatting conflicts between tools

**Solution**:
- Check ESLint and Prettier configuration alignment
- Use editor extensions for consistent formatting
- Run `npm run lint` to check for issues

#### Hot Reload Not Working

**Problem**: Changes don't reflect in development server

**Solutions**:
- Restart development server
- Clear browser cache
- Check file watcher limits (Linux): `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf`

## Browser-Specific Issues

### Safari Issues

TODO: Add Safari-specific troubleshooting

### Internet Explorer/Edge Issues

TODO: Add legacy browser support information

## Performance Issues

### Slow Application Loading

**Causes and solutions**:
- Large bundle size: Check with `npm run build --analyze`
- Network issues: Check browser network tab
- Too many components rendering: Use React DevTools

### Memory Leaks

**Troubleshooting**:
- Use browser developer tools memory tab
- Check for unremoved event listeners
- Monitor component mount/unmount cycles

## Getting Help

If you can't find a solution here:

1. **Search existing issues**: Check the [GitHub issues](https://github.com/colbylwilliams/notes-md/issues)
2. **Create a new issue**: Provide detailed information including:
   - Operating system and version
   - Node.js version
   - Browser and version
   - Steps to reproduce
   - Error messages and stack traces
   - Screenshots if applicable

3. **Community support**: Engage with the community through GitHub discussions

## Debugging Tips

### Enable Debug Logging

TODO: Add instructions for enabling debug mode

### Browser Developer Tools

- Use Console tab for JavaScript errors
- Use Network tab for API request issues
- Use Application tab for local storage inspection
- Use Performance tab for performance profiling

### Node.js Debugging

TODO: Add Node.js debugging instructions for the API