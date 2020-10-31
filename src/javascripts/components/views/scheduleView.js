import dinoData from '../../helpers/data/dinoData';
import staffData from '../../helpers/data/staffData';
import vendorData from '../../helpers/data/vendorData';
import rideData from '../../helpers/data/rideData';

const staffCal = () => {
  staffData.getStaff().then((response) => {
    if (response.length) {
      response.forEach((staff) => {
        if (staff.dinoId) {
          dinoData.getSingleDino(staff.dinoId)
            .then((dinoResponse) => {
              const job = dinoResponse.name;
              $('#staff-cal').append(`
                  <tr>
                    <td class="staff-info-cal">
                      <div class="cal-name">${staff.name}</div>
                    </td>
                    <td class="staff-job cal-dino">
                      <div class="assignment">${job}</div>
                    </td>
                  </tr>
                `);
            });
        } else if (staff.rideId) {
          rideData.getSingleRide(staff.rideId)
            .then((rideResponse) => {
              const job = rideResponse.name;
              $('#staff-cal').append(`
                  <tr>
                    <td class="staff-info-cal">
                      <div class="cal-name">${staff.name}</div>
                    </td>
                    <td class="staff-job cal-ride">
                      <div class="assignment">${job}</div>
                    </td>
                  </tr>
                `);
            });
        } else if (staff.vendorId) {
          vendorData.getSingleVendor(staff.vendorId)
            .then((vendorResponse) => {
              const job = vendorResponse.name;
              $('#staff-cal').append(`
                  <tr>
                    <td class="staff-info-cal">
                      <div class="cal-name">${staff.name}</div>
                    </td>
                    <td class="staff-job  cal-vendor">
                      <div class="assignment">${job}</div>
                    </td>
                  </tr>
                `);
            });
        } else {
          $('#us-list').append(`
            <li class"us-staff>${staff.name}</li>
          `);
        }
      });
    } else {
      $('#app').append('<h2>NO STAFF</h2>');
    }
  });
};
const calBuilder = () => {
  $('#app').html(`
<div id="cal">
  <div id="est-finish-dates">
    <table id="staff-cal">
      <tr class="staff-body">
        <th class="staff">Staff Name<br/></th>
        <th>Sunday<br/></th>
        <th>Monday<br/></th>
        <th>Tuesday<br/></th>
        <th>Wednesday<br/></th>
        <th>Thursday<br/></th>
        <th>Friday<br/></th>
        <th>Saturday<br/></th>
      </tr>
    </table>
  </div>
</div>
<div id="us-list-view">
  <div class="us-title">
    <h3>Unnassigned Staff</h3>
  </div>
  <ul id="us-list"></ul>

`);
  staffCal();
};

export default { calBuilder };
