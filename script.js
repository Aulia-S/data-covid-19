
// Data Global
fetch('https://covid19.mathdro.id/api')
    .then(response => response.json())
    .then(response => {
        const jml_positive = response.confirmed.value;
        const jml_sembuh = response.recovered.value;
        const jml_meninggal = response.deaths.value;
        
        const dataGlobalTable = document.querySelector('.data-global-table');

        dataGlobalTable.innerHTML = `<td>${jml_positive.toLocaleString('id-ID')}</td>
                                     <td>${jml_sembuh.toLocaleString('id-ID')}</td>
                                     <td>${jml_meninggal.toLocaleString('id-ID')}</td>`;
    });

//Data indonesia
fetch('https://covid19.mathdro.id/api/countries/indonesia')
    .then(response => response.json())
    .then(response => {
        const jml_positive = response.confirmed.value;
        const jml_sembuh = response.recovered.value;
        const jml_meninggal = response.deaths.value;

        const dataIndonesiaTable = document.querySelector('.data-indonesia-table');

        dataIndonesiaTable.innerHTML = `<td>${jml_positive.toLocaleString('id-ID')}</td>
                                        <td>${jml_sembuh.toLocaleString('id-ID')}</td>
                                        <td>${jml_meninggal.toLocaleString('id-ID')}</td>`;
    });

// Data provinsi
fetch('https://indonesia-covid-19.mathdro.id/api/provinsi/')
  .then(response => response.json())
  .then(response => response.data)
  .then(response => {

    let row = '';
    response.forEach(prov => {
      row += `<tr>
                <th scope="row">${prov.provinsi}</th>
                <td>${prov.kasusPosi.toLocaleString('id-ID')}</td>
                <td>${prov.kasusSemb.toLocaleString('id-ID')}</td>
                <td>${prov.kasusMeni.toLocaleString('id-ID')}</td>
              </tr>` 
    });

    const dataProvinsiTable = document.querySelector('.data-provinsi-table');
    dataProvinsiTable.innerHTML = row;

  });