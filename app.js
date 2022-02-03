const Devices_new = JSON.parse(localStorage.getItem('devices_new')) || [];

Devices_new.forEach(function(device) {
    $('#devices_new tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.email}</td>
        <td>${device.date}</td>
        <td>${device.name}</td>
        <td>${device.version}</td>
      </tr>`
    );
});

$('#add-device').on('click', function () {
    const user = $('#user').val();
    const email = $('#email').val();
    const date = $('#date').val();
    const name = $('#name').val();
    const version = $('#version').val();
    Devices_new.push({ user, email, date, name, version });
    localStorage.setItem('devices_new', JSON.stringify(Devices_new));
    location.href = '/';
});

$('#navbar').load('navbar.html');