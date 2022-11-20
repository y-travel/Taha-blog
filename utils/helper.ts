const getRequest = async (url: string) =>
  await (globalThis as any).$nuxt.$http.$get(`${url}`);

// `http://localhost:1337${url}`

function toEnglishNumber(strNum: string) {
  var pn = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  var en = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var cache = strNum;
  for (var i = 0; i < 10; i++) {
    var regex_fa = new RegExp(pn[i], 'g');
    cache = cache.replace(regex_fa, en[i]);
  }
  return cache;
}

function getMonthName(strDate: string) {
  let strDay = strDate.substring(strDate.indexOf('/') + 1, strDate.length);

  let strMonth = strDate.substring(0, strDate.indexOf('/'));

  switch (strMonth) {
    case '۱':
      strMonth = 'فروردین';
      break;
    case '۲':
      strMonth = 'اردیبهشت';
      break;
    case '۳':
      strMonth = 'خرداد';
      break;
    case '۴':
      strMonth = 'تیر';
      break;
    case '۵':
      strMonth = 'مرداد';
      break;
    case '۶':
      strMonth = 'شهریور';
      break;
    case '۷':
      strMonth = 'مهر';
      break;
    case '۸':
      strMonth = 'آبان';
      break;
    case '۹':
      strMonth = 'آذر';
      break;
    case '۱۰':
      strMonth = 'دی';
      break;
    case '۱۱':
      strMonth = 'بهمن';
      break;
    case '۱۲':
      strMonth = 'اسفند';
      break;
    default:
    // code block
  }

  return strDay + ' ' + strMonth;
}

function dateDiff(from: string, to: string) {
  let result = 0;

  let dateFrom = toEnglishNumber(
    new Date(from.replaceAll('-', '/')).toLocaleDateString('fa-IR')
  );
  let dateTo = toEnglishNumber(
    new Date(to.replaceAll('-', '/')).toLocaleDateString('fa-IR')
  );

  // let dateFrom = "1401/2/29";
  // let dateTo = "1401/3/4";

  let yFrom = parseInt(dateFrom.substring(0, 4));
  let mFrom = parseInt(dateFrom.substring(5, dateFrom.indexOf('/', 6)));
  let dFrom = parseInt(
    dateFrom.substring(dateFrom.indexOf('/', 6) + 1, dateFrom.length)
  );

  let yTo = parseInt(dateTo.substring(0, 4));
  let mTo = parseInt(dateTo.substring(5, dateTo.indexOf('/', 6)));
  let dTo = parseInt(
    dateTo.substring(dateTo.indexOf('/', 6) + 1, dateTo.length)
  );

  if (yFrom == yTo) {
    if (mFrom == mTo) {
      if (dFrom < dTo) {
        result = dTo - dFrom;
        // debugger;
      }
    } else if (mFrom == 12) result = 29 - dFrom + dTo;
    else if (mFrom < mTo)
      if (mFrom < 7) result = 31 - dFrom + dTo;
      else result = 30 - dFrom + dTo;
  }

  // debugger

  return result;
}

export { getRequest, dateDiff, getMonthName };
