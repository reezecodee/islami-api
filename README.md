## Islami-API
Islami-api adalah API yang menyediakan berbagai macam daftar data seputar islami. API ini dirancang untuk kemudahan mengakses data islami seperti Asma'ul Husna, Doa harian, dan lainnya.

## Endpoint
<table>
    <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Keterangan</th>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/asmaul-husna/all</td>
        <td>Mendapatkan semua daftar Asma'ul Husna.</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/asmaul-husna/:urutan</td>
        <td>Mendapatkan data Asma'ul Husna secara spesifik.</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/doa-harian</td>
        <td>Mendapatkan daftar doa harian.</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/niat-sholat-wajib/all</td>
        <td>Mendapatkan semua niat sholat wajib.</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/niat-sholat-wajib/:niat</td>
        <td>Mendapatkan niat sholat secara spesifik.</td>
    </tr>
</table>

## Contoh Penggunaan
##### Menggunakan Fetch
```TypeScript
fetch("https://islami-api.vercel.app/api/asmaul-husna/all")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

##### Menggunakan Axios
```TypeScript
axios.get("https://islami-api.vercel.app/api/asmaul-husna/all")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(`Terjadi kesalahan ${err}`);
  });

```
