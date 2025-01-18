<template>
  <div>
    <h1>Našich Zamestnancov</h1>
    <div class="employee-intro">
      <img src="@/assets/IMG/zamest.jpg" alt="Employees" class="intro-image" />
      <h2>ZAMESTNANCI</h2>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Rok</th>
          <th scope="col">Úľa</th>
          <th scope="col">Včely</th>
          <th scope="col">Priemerné množstvo medu</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in employeeData" :key="data.year">
          <td>{{ data.year }}</td>
          <td>{{ data.hives }}</td>
          <td>{{ data.bees }}</td>
          <td>{{ data.honey }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import employeeData from '@/data/employees.json';

export default {
  name: 'ZamestnanciPage',
  data() {
    return {
      employeeData
    };
  },
};
</script>

<style scoped>
.employee-intro {
  text-align: center;
  padding: 20px;
}

.intro-image {
  max-width: 800px; 
  height: auto; 
  margin-bottom: 20px;
  border-radius: 15px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06); 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.intro-image:hover {
  transform: scale(1.05); 
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.table th {
  background-color: #f2f2f2;
  font-weight: bold;
}
</style>
