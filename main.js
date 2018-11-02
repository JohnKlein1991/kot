var disabled = function(element) {
  let elem = element.querySelector('p.caption');
  let text = element.querySelector('p.filling').innerHTML;
  elem.innerHTML = "Печалька, " + text + " закончился";
  let fog = element.querySelector('div.fog');
  fog.classList.remove('hidden');
}

var select = function (e, element) {
  if (element.classList.contains('item-default')) {
    element.classList.remove('default-hover');
    element.classList.remove('item-default');
    element.classList.add('selected');
    element.querySelector('.caption-default').classList.add('hidden');
    element.querySelector('.caption-selected').classList.remove('hidden');
    return;
  }
  if (element.classList.contains('selected')) {
    element.classList.remove('selected-hover');
    element.classList.remove('selected');
    element.classList.add('item-default');
    element.querySelector('.caption-default').classList.remove('hidden');
    element.querySelector('.caption-selected').classList.add('hidden');
    element.querySelector('p.description').innerHTML = description;
  }
}

var mouseover = function (e, element) {
  if (element.classList.contains('item-default')){
    var x = e.relatedTarget;
    while (!x.classList.contains('item-default') && x.tagName != 'BODY'){
      x = x.parentNode;
    }
    if (x.classList.contains('item-default')){
      if (!e.relatedTarget.classList.contains('caption')) return;
    }
    if (e.target.classList.contains('caption') && e.target.tagName == 'P' ) return;
    element.classList.add('default-hover');
    return;
  }

  if (element.classList.contains('selected')){
    var x = e.relatedTarget;
    while (!x.classList.contains('selected') && x.tagName != 'BODY'){
      x = x.parentNode;
    }
    if (x.classList.contains('selected')){
      if (!e.relatedTarget.classList.contains('caption')) return;
    }
    if (e.relatedTarget.parentNode.classList.contains('selected') )return;
    if (e.target.classList.contains('caption')) return;
    element.classList.add('selected-hover');
    element.querySelector('p.description').innerHTML = selectedHoverText;
  }
}

var mouseout = function (e, element) {
  if (element.classList.contains('item-default')){
    var x = e.relatedTarget;
    while (!x.classList.contains('item-default') && x.tagName != 'BODY'){
      x = x.parentNode;
    }
    if (x.classList.contains('item-default')){
      if (!e.relatedTarget.classList.contains('caption')) return;
    }
    if (e.target.classList.contains('caption') && e.target.tagName == 'P' ) return;
    element.classList.remove('default-hover');
    return;
  }
  if (element.classList.contains('selected')){
    var x = e.relatedTarget;
    while (!x.classList.contains('selected') && x.tagName != 'BODY'){
      x = x.parentNode;
    }
    if (x.classList.contains('selected')){
      if (!e.relatedTarget.classList.contains('caption')) return;
    }
    if (e.target.classList.contains('caption')) return;
    element.classList.remove('selected-hover');
    element.querySelector('p.description').innerHTML = description;
  }
}

var items = document.querySelectorAll('.item');
var selectedHoverText = 'Котэ не одобряет?';
var description = 'Сказочное заморское явство';
for (let i = 0; i < items.length; i++) {
  let element = items[i];
  if (items[i].classList.contains('disabled')) {
    disabled(element);
    continue;
  }
  element.status = 'default';
  element.onclick = function(event) {select(event, element);}
  element.onmouseover = function (event) {mouseover(event, element)}
  element.onmouseout = function (event) {mouseout(event, element)}
}
