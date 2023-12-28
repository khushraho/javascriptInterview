 var length = 6;
    var chars = '1234567890';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    console.log({result});