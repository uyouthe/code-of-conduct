const template = params => `
<h1>Code of Conduct</h1>
<p>
  All participants of ${params['org-name']} are expected to
  abide by our Code of Conduct, both online and during
  in-person events that are hosted and/or associated
  with ${params['org-name']}.
</p>

<h2>The Pledge</h2>

<p>
  In the interest of fostering an open and welcoming
  environment, we pledge to make participation in our
  project and our community a harassment-free experience
  for everyone, regardless of age, body size, disability,
  ethnicity, gender identity and expression, level of
  experience, nationality, personal appearance, race,
  religion, or sexual identity and orientation.
</p>

<h2>The Standards</h2>

<p>
  Examples of behaviour that contributes to creating a
  positive environment include:
</p>

<ul>
  <li>Using welcoming and inclusive language</li>
  <li>Being respectful of differing viewpoints and experiences</li>
  <li>Gracefully accepting constructive criticism</li>
  ${params['inequality'] ? "<li>Referring to people by their preferred pronouns and using gender-neutral pronouns when uncertain</li>" : ""}
</ul>

<p>
  Examples of unacceptable behaviour by participants include:
<p>

<ul>
  <li>
    Trolling, insulting/derogatory comments, public
    or private harassment
  </li>
  <li>
    Publishing others' private information, such as
    a physical or electronic address, without explicit
    permission
  </li>
  <li>
    Not being respectful to reasonable communication
    boundaries, such as 'leave me alone,' 'go away,'
    or 'I’m not discussing this with you.'
  </li>
  ${params['sex'] ? "<li>The usage of sexualised language or imagery and unwelcome sexual attention or advances</li>" : ""}
  ${params['swearing'] ? "<li>Swearing, usage of strong or disturbing language</li>" : ""}
  ${params['graphics'] ? "<li>Demonstrating the graphics or any other content you know may be considered disturbing</li>" : ""}
  ${params['politics'] ? "<li>Starting and/or participating in arguments related to politics</li>" : ""}
  ${params['inequality'] ? "<li>Assuming or promoting any kind of inequality including but not limited to: age, body size, disability, ethnicity, gender identity and expression, nationality and race, personal appearance, religion, or sexual identity and orientation</li>" : ""}
  ${params['drugs'] ? "<li>Drug promotion of any kind</li>" : ""}
  ${params['tastes'] ? "<li>Attacking personal tastes</li>" : ""}
  <li>
    Other conduct which you know could reasonably be
    considered inappropriate in a professional setting.
  </li>
</ul>

<h2>Enforcement</h2>
<p>
  Violations of the Code of Conduct may be reported by
  sending an email to <a href="mailto:${params['email']}">${params['email']}</a>. All reports will be
  reviewed and investigated and will result in a response
  that is deemed necessary and appropriate to the
  circumstances. Further details of specific enforcement
  policies may be posted separately.
</p>
<p>
  We hold the right and responsibility to remove comments
  or other contributions that are not aligned to this
  Code of Conduct, or to ban temporarily or permanently
  any members for other behaviours that they deem inappropriate,
  threatening, offensive, or harmful.
</p>

<h2>Attribution</h2>
<p>
  This Code of Conduct is adapted from <a href="https://dev.to/code-of-conduct">dev.to</a>.
</p>
`

document.getElementById('settings').addEventListener('submit', e => {
  e.preventDefault()
  //
  // const params = {
  //   'sex': document.getElementById('sex').checked,
  //   'swearing': document.getElementById('swearing').checked,
  //   'graphics': document.getElementById('graphics').checked,
  //   'politics': document.getElementById('politics').checked,
  //   'inequality': document.getElementById('inequality').checked,
  //   'drugs': document.getElementById('drugs').checked,
  //   'tastes': document.getElementById('tastes').checked,
  //   'org-name': document.getElementById('org-name').value,
  //   'email': document.getElementById('email').value
  // }

  let params = {}

  Array.prototype.slice.call(document.getElementsByClassName('data')).forEach(
    node => { params[node.getAttribute('id')] = node.value }
  )

  document.getElementById('main').classList.add('done')
  document.getElementById('result').innerHTML = template(params)
})

document.getElementById('again').addEventListener('click', () => window.location.reload())
document.getElementById('print').addEventListener('click', () => window.print())
