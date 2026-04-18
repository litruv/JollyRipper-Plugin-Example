/**
 * YouTube Opener Plugin
 * Opens a specific YouTube video when any download completes.
 */

module.exports = {
  name: 'YouTube Opener',
  version: '1.0.0',
  
  activate(ctx) {
    ctx.log('YouTube Opener plugin activated');
    
    const onDownloadComplete = (data) => {
      const url = 'https://www.youtube.com/watch?v=hiRacdl02w4';
      ctx.log(`Download complete! Opening ${url}`);
      ctx.shell.openExternal(url);
    };
    
    ctx.events.on('download-complete', onDownloadComplete);
    
    ctx._cleanup = () => {
      ctx.events.off('download-complete', onDownloadComplete);
    };
  },
  
  deactivate(ctx) {
    ctx.log('YouTube Opener plugin deactivated');
    if (ctx._cleanup) {
      ctx._cleanup();
    }
  }
};
