let str = 'sss site.ru zzz site.com kkk';
let res = str.replace(/(\S+[.]\S+)/g, "<a href = http://$&>$&</a>");
document.write(res);