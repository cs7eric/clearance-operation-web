export const juejin_setting = {
  menubar: false,
  height: 190,
  toolbar:
    'bold italic underline h1 h2 blockquote codesample numlist bullist link image | removeformat fullscreen',
  plugins: 'codesample link image table lists fullscreen',
  toolbar_mode: 'sliding',
  nonbreaking_force_tab: true,
  link_title: false,
  link_default_target: '_blank',
  content_style: 'body{font-size: 16px}',
  // 自定义 图片上传模式
  custom_images_upload: true,
  images_upload_url: 'your_upload_api_url...',
  custom_images_upload_callback: (res) => res.url,
  custom_images_upload_param: { id: 'xxxx01', age: 18 },
}

export const default_setting = {height: 300,
  toolbar:
    'undo redo | fullscreen | blocks alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontsize forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |',
  toolbar_mode: 'sliding',
  quickbars_selection_toolbar:
    'removeformat | bold italic underline strikethrough | fontsize forecolor backcolor',
  plugins: 'link image media table lists fullscreen quickbars',
  font_size_formats: '12px 14px 16px 18px',
  link_default_target: '_blank',
  link_title: false,
  nonbreaking_force_tab: true,
  // 以中文简体为例
  language: 'zh-Hans',
  language_url:
    'https://unpkg.com/@jsdawn/vue3-tinymce@2.0.2/dist/tinymce/langs/zh-Hans.js',
}