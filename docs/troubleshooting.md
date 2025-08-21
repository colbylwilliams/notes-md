# Troubleshooting

This guide helps you resolve common issues when working with Notes MD.

## Common Issues

### Frontend Issues

#### Development Server Won't Start
**Problem**: `npm run dev` fails in the web directory

**Solutions**:
1. Check Node.js version (requires v14+)
2. Delete `node_modules` and run `npm install`
3. Check for port conflicts (default: 5173)

#### Build Failures
**Problem**: `npm run build` fails

**Solutions**:
1. Run `npm run lint` to check for code issues
2. Verify all TypeScript errors are resolved
3. Check for missing dependencies

### API Issues

#### API Server Won't Start
**Problem**: `npm run dev` fails in the api directory

**Solutions**:
1. Check port availability (default: 3000)
2. Verify environment variables
3. Check for TypeScript compilation errors

#### CORS Errors
**Problem**: Frontend can't connect to API

**Solutions**:
1. Verify API is running on correct port
2. Check CORS configuration in API
3. Ensure frontend API URL is correct

### General Issues

#### Module Not Found Errors
**Problem**: Import/require statements fail

**Solutions**:
1. Run `npm install` in affected directory
2. Clear npm cache: `npm cache clean --force`
3. Delete `package-lock.json` and reinstall

#### TypeScript Errors
**Problem**: Type checking failures

**Solutions**:
1. Update type definitions
2. Check tsconfig.json configuration
3. Ensure all imports have proper types

## Getting Help

- Check existing GitHub issues
- Create a new issue with detailed information
- Include error messages and environment details

## TODO

- [ ] Add more specific error scenarios
- [ ] Include debugging techniques
- [ ] Add environment-specific troubleshooting
- [ ] Document known limitations
- [ ] Add FAQ section
- [ ] Include log analysis guide