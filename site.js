(function () {
  var head = document.querySelector('.site-head');
  var toggle = document.getElementById('nav-toggle');
  if (head && toggle) {
    toggle.addEventListener('click', function () {
      var open = head.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  var sub = document.querySelector('.sub-toggle');
  if (sub) {
    var li = sub.closest('.has-sub');
    sub.addEventListener('click', function () {
      var open = li.classList.toggle('open');
      sub.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { li.classList.remove('open'); sub.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* quote form: submits directly to the Elevix enquiry inbox */
  var form = document.getElementById('quote-form');
  if (form) {
    var ready = document.getElementById('quote-ready');
    var statusTitle = document.getElementById('quote-status-title');
    var statusText = document.getElementById('quote-status-text');
    var err = document.getElementById('quote-err');
    var submit = document.getElementById('quote-submit');
    var want = (location.hash || '').slice(1);
    if (want) {
      ['q-service', 'q-model'].forEach(function (id) {
        var select = document.getElementById(id);
        if (!select) return;
        Array.prototype.forEach.call(select.options, function (o) { if (o.getAttribute('data-key') === want) { o.selected = true; } });
      });
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (id) { return (document.getElementById(id).value || '').trim(); };
      var name = v('q-name'), email = v('q-email'), msg = v('q-msg');
      if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !msg) {
        err.hidden = false;
        err.textContent = 'Add your name, a valid email and a short description of what you need.';
        return;
      }
      err.hidden = true;
      ready.hidden = true;
      submit.disabled = true;
      submit.textContent = 'Sending…';

      var data = new FormData();
      data.append('name', name);
      data.append('email', email);
      data.append('company', v('q-company'));
      data.append('phone', v('q-phone'));
      data.append('service', v('q-service'));
      data.append('engagement_model', v('q-model'));
      data.append('message', msg);
      data.append('_subject', 'New Elevix website enquiry — ' + name);
      data.append('_template', 'table');
      data.append('_captcha', 'false');
      data.append('_replyto', email);

      fetch('https://formsubmit.co/ajax/reuben.peter@elevixtech.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      }).then(function (response) {
        if (!response.ok) throw new Error('Submission failed');
        return response.json();
      }).then(function () {
        statusTitle.textContent = 'Request sent';
        statusText.textContent = 'Thanks. Your request has been sent to the Elevix team.';
        ready.hidden = false;
        form.reset();
        ready.scrollIntoView({ block: 'nearest' });
      }).catch(function () {
        statusTitle.textContent = 'Could not send your request';
        statusText.innerHTML = 'Please try again, or email <a class="link" href="mailto:reuben.peter@elevixtech.com">reuben.peter@elevixtech.com</a>.';
        ready.hidden = false;
      }).finally(function () {
        submit.disabled = false;
        submit.textContent = 'Send quote request';
      });
    });
  }
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var el = document.getElementById(b.getAttribute('data-copy'));
      var text = el.tagName === 'TEXTAREA' ? el.value : el.textContent;
      var label = b.textContent;
      var ok = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = label; }, 1600); };
      var fallback = function () { if (el.select) { el.select(); } else { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); } };
      try { navigator.clipboard.writeText(text).then(ok, fallback); } catch (x) { fallback(); }
    });
  });
})();
