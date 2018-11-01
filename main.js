var disabled = function(arr, j) {
  let elem = arr[j].querySelector('p.caption');
  let text = arr[j].querySelector('p.filling').innerHTML;
  elem.innerHTML = `Печалька, ${text} закончился`;
  let fog = arr[j].querySelector('div.fog');
  fog.classList.remove('hidden');
}

var select = function (e, arr, j) {
  if (arr[j].classList.contains('item-default')) {
    arr[j].classList.remove('default-hover');
    arr[j].classList.replace('item-default', 'selected');
    arr[j].querySelector('.caption-default').classList.add('hidden');
    arr[j].querySelector('.caption-selected').classList.remove('hidden');
    return;
  }
  if (arr[j].classList.contains('selected')) {
    arr[j].classList.remove('selected-hover');
    arr[j].classList.replace('selected', 'item-default');
    arr[j].querySelector('.caption-default').classList.remove('hidden');
    arr[j].querySelector('.caption-selected').classList.add('hidden');
    arr[j].querySelector('p.description').innerHTML = description;
  }
}

var mouseover = function (e, arr, j) {
  if (arr[j].classList.contains('item-default')){
    var x = e.relatedTarget;
    while (!x.classList.contains('item-default') && x.tagName != 'BODY'){
      x = x.parentNode;
    }
    if (x.classList.contains('item-default')){
      if (!e.relatedTarget.classList.contains('caption')) return;
    }
    if (e.target.classList.contains('caption') && e.target.tagName == 'P' ) return;
    arr[j].classList.add('default-hover');
    return;
  }

  if (arr[j].classList.contains('selected')){
    var x = e.relatedTarget;
    while (!x.classList.contains('selected') && x.tagName != 'BODY'){
      x = x.parentNode;
    }
    if (x.classList.contains('selected')){
      if (!e.relatedTarget.classList.contains('caption')) return;
    }
    if (e.relatedTarget.parentNode.classList.contains('selected') )return;
    if (e.target.classList.contains('caption')) return;
    arr[j].classList.add('selected-hover');
    arr[j].querySelector('p.description').innerHTML = selectedHoverText;
  }
}

var mouseout = function (e, arr, j) {
  if (arr[j].classList.contains('item-default')){
    var x = e.relatedTarget;
    while (!x.classList.contains('item-default') && x.tagName != 'BODY'){
      x = x.parentNode;
    }
    if (x.classList.contains('item-default')){
      if (!e.relatedTarget.classList.contains('caption')) return;
    }
    if (e.target.classList.contains('caption') && e.target.tagName == 'P' ) return;
    arr[j].classList.remove('default-hover');
    return;
  }
  if (arr[j].classList.contains('selected')){
    var x = e.relatedTarget;
    while (!x.classList.contains('selected') && x.tagName != 'BODY'){
      x = x.parentNode;
    }
    if (x.classList.contains('selected')){
      if (!e.relatedTarget.classList.contains('caption')) return;
    }
    if (e.target.classList.contains('caption')) return;
    arr[j].classList.remove('selected-hover');
    arr[j].querySelector('p.description').innerHTML = description;
  }
}

var items = document.querySelectorAll('.item');
var selectedHoverText = 'Котэ не одобряет?';
var description = 'Сказочное заморское явство';
for (let i = 0; i < items.length; i++) {
  if (items[i].classList.contains('disabled')) {
    disabled(items, i);
    continue;
  }
  items[i].status = 'default';
  items[i].onclick = function(event) {select(event, items, i);}
  items[i].onmouseover = function (event) {mouseover(event, items, i)}
  items[i].onmouseout = function (event) {mouseout(event, items, i)}
}
