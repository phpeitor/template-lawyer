(() => {
   const originalWarn = console.warn;
   const originalLog = console.log;
   const ignoredMessages = new Set([
      'amvsoft.tech',
      'JQMIGRATE: Migrate is installed, version 3.3.2',
      'Search endpoint requested!'
   ]);
   const shouldIgnore = args => args.length === 1 && ignoredMessages.has(args[0]);

   console.warn = (...args) => shouldIgnore(args) || originalWarn(...args);
   console.log = (...args) => shouldIgnore(args) || originalLog(...args);
   window.addEventListener('load', () => {
      console.warn = originalWarn;
      console.log = originalLog;
   }, { once: true });
})();

window.elementorFrontendConfig = {
   environmentMode: { edit: false, wpPreview: false, isScriptDebug: false },
   is_rtl: false,
   breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
   responsive: {
      breakpoints: {
         mobile: { label: 'Mobile', value: 767, default_value: 767, direction: 'max', is_enabled: true },
         mobile_extra: { label: 'Mobile Extra', value: 880, default_value: 880, direction: 'max', is_enabled: false },
         tablet: { label: 'Tablet', value: 1024, default_value: 1024, direction: 'max', is_enabled: true },
         tablet_extra: { label: 'Tablet Extra', value: 1200, default_value: 1200, direction: 'max', is_enabled: false },
         laptop: { label: 'Laptop', value: 1366, default_value: 1366, direction: 'max', is_enabled: false },
         widescreen: { label: 'Widescreen', value: 2400, default_value: 2400, direction: 'min', is_enabled: false }
      }
   },
   version: '3.6.6',
   is_static: true,
   experimentalFeatures: { e_dom_optimization: true, e_optimized_assets_loading: true, e_optimized_css_loading: true },
   urls: { assets: './wp-content/cache/autoptimize/' },
   settings: { page: [], editorPreferences: [] },
   kit: { active_breakpoints: ['viewport_mobile', 'viewport_tablet'], lightbox_enable_counter: 'yes', lightbox_enable_fullscreen: 'yes', lightbox_enable_zoom: 'yes', lightbox_enable_share: 'yes', lightbox_title_src: 'title', lightbox_description_src: 'description' },
   post: { id: 59, title: 'Estudio Wiesse & Abogados' }
};
