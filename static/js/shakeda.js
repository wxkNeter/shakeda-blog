// img 包裹 div 并设置overflow
$('div.content_placeholder-div img').wrap('<div></div>')
$('div.content_placeholder-div img:not(.artical-logo)').parent().css('overflow', 'auto');