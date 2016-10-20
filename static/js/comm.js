$('.comm_datetime').datetimepicker({
//            language:  'en',
    weekStart: 1,
    todayBtn: true,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    showMeridian: 1,
    endDate:new Date(),//只能选择今天之前的日期
    minView: 2//不弹出小时，只能选择到天
}).on('changeDate',function(env){
    $('.comm_datetime').datetimepicker('setEndDate',new Date());
});

$(document).ready(function() {
$('#zhichuForm').bootstrapValidator({
//        live: 'disabled',
    message: 'This value is not valid',
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        hfcontent: {
            validators: {
                notEmpty: {
                    message: '请输入消费商品'
                }
            }
        },
        hfkind: {
            validators: {
                notEmpty: {
                    message: '请选择消费种类'
                }
            }
        },
        hfmoney: {
            validators: {
                notEmpty: {
                    message: '请选择消费金额'
                },
                regexp: {
                    regexp: /^\+?(:?(:?\d+\.\d+)|(:?\d+))$/,
                    message: '请填写正确的数字格式'
                },
            }
        },
        hfplace:{
            validators: {}
        },
        date:{
            validators: {}
        },
        hfstar:{
            validators: {}
        },
        hfmark:{
            validators: {
                stringLength: {
                    max: 250,
                    message: '请输入少于250个字'
                }
            }

        }
    }
});
});

//左侧列表栏日期
$('.shouru_datetime').datetimepicker({
//            language:  'en',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 3,
    forceParse: 0,
    showMeridian: 1,
    endDate:new Date(),//只能选择今天之前的日期
    minView: 3//不弹出小时，只能选择到天
}).on('changeDate',function(env){
    $('.shouru_datetime').datetimepicker('setEndDate',new Date());
});

$(document).ready(function() {
        var chart = {
            zoomType: 'xy'
        };
        var subtitle = {
            text: 'Source: runoob.com'
        };
        var title = {
            text: '2016年年度消费'
        };
        var xAxis = {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        };
        var yAxis= [{ // 第一条Y轴
            labels: {
                format: '{value}\xB0C',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // 第二条Y轴
            title: {
                text: 'Rainfall',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }];
        var tooltip = {
            shared: true
        };
        var legend = {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        };
        var series= [{
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: '\xB0C'
            }
        }
        ];

        var json = {};
        json.chart = chart;
        json.title = title;
        json.subtitle = subtitle;
        json.xAxis = xAxis;
        json.yAxis = yAxis;
        json.tooltip = tooltip;
        json.legend = legend;
        json.series = series;
        $('#container').highcharts(json);
    });