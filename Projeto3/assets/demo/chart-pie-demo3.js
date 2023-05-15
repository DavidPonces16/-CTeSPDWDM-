// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart3");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Linha de Produção de Pedra", "Linha de Produção de Ferro", "Linha de Produção de Vidro", "Linha de Produção de Madeira", "Linha de Montagem"],
    datasets: [{
      data: [50.30, 10.20, 12.00, 15.50, 12,00],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#FF007F'],
    }],
  },
});
