export const updateObject = (state, updatedData) => {
  return {
    ...state,
    ...updatedData
  };
};

export const queryParam = function (ary) {
  return Object.keys(ary)
    .map(function (key) {
      if (Array.isArray(ary[key])) {
        var arrayParts = [];
        for (var i = 0; i < ary[key].length; i++) {
          arrayParts.push(encodeURIComponent(key) + '=' + encodeURIComponent(ary[key][i]));
        }
        return arrayParts.join('&');
      }
      return encodeURIComponent(key) + '=' + encodeURIComponent(ary[key]);
    })
    .join('&');
};

export const getQueryStringArray = () => {
  let assoc = getQueryStrings(window.location.search);
  return assoc;
};

export const getQueryStrings = (url) => {
  let assoc = [];
  let qParams = url.toLowerCase().split('?');
  if (qParams[1] !== undefined) {
    let items = qParams[1].split('&');
    for (let j = 0; j < items.length; j++) {
      let a = items[j].split('=');
      assoc[a[0]] = a[1];
    }
  }
  return assoc;
};

export const getQueryStringsFragment =() =>{
  let queryParams= getQueryStrings(window.location.search);
  let fragmentValue = window.location.hash;
  return fragmentValue != undefined && fragmentValue != ''?`${queryParams.returnurl}${fragmentValue}`: queryParams.returnurl;
}

export const getReviewCommentString = (comment, expanded) => {
  if (comment != undefined) {
    if (comment.length > 150 && !expanded) {
      return comment.substring(0, 150);
    } else {
      return comment;
    }
  }
};

export const getQuartileInfo = (quartile) => {
  switch (quartile) {
    case 4:
      return 'much higher than normal';
    case 3:
      return 'higher than normal';
    case 2:
      return 'normal';
    case 1:
      return 'lower than normal';
    default:
      return 'No Data Available';
  }
};
export const objectToCamel = (o) => {
  var newO, origKey, newKey, value;
  if (o instanceof Array) {
    return o.map(function (value) {
      if (typeof value === 'object') {
        value = objectToCamel(value);
      }
      return value;
    });
  } else {
    newO = {};
    for (origKey in o) {
      if (o.hasOwnProperty(origKey)) {
        newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString();
        value = o[origKey];
        if (value instanceof Array || (value !== null && value.constructor === Object)) {
          value = objectToCamel(value);
        }
        newO[newKey] = value;
      }
    }
  }
  return newO;
};
export const getGenderCode = (gender) => {
  let genderCode = 'U';
  if (gender != undefined && gender != null) {
    gender.toUpperCase() == 'F' || gender.toUpperCase() == 'W'
      ? 'F'
      : gender.toUpperCase() == 'M' || gender.toUpperCase() == 'T'
      ? 'M'
      : 'U';
  }
  return genderCode;
};

export const stripEnclosingTag = (text, startTag, endTag = '') => {
  if (!startTag || !text || !text.startsWith(startTag)) return text;
  return endTag && text.endsWith(endTag)
    ? text.slice(startTag.length, -1 * endTag.length)
    : text.slice(startTag.length);
};

//The below logic is not confirmed, so temporally hide this.

// export const showPercentile = (percentileData) => {
//   let totalValue = 0;
//   percentileData.Items.map((item) => {
//     totalValue = Number(totalValue) + Number(item.Percentile);
//   });
//   let aggregateValue = Number(totalValue / percentileData.Items.length);
//   return aggregateValue;
// };
