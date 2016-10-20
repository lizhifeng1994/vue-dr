    //左侧列表栏日期
    $('.form_datetime1').datetimepicker({
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
        $('.form_datetime1').datetimepicker('setEndDate',new Date());
    });

//    表单日期
    $('.form_datetime').datetimepicker({
//            language:  'en',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        endDate:new Date(),//只能选择今天之前的日期
        showMeridian: 1,
        minView: 2//不弹出小时，只能选择到天
    }).on('changeDate',function(env){
        $('.form_datetime').datetimepicker('setEndDate',new Date());
    });

    //表单验证
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
                            message: '请输入具体来源'
                        }
                    }
                },
                hfkind: {
                    validators: {
                        notEmpty: {
                            message: '请选择收入种类'
                        }
                    }
                },
                hfmoney: {
                    validators: {
                        notEmpty: {
                            message: '请选择收入金额'
                        },
                        regexp: {
                            regexp: /^\+?(:?(:?\d+\.\d+)|(:?\d+))$/,
                            message: '请填写正确的数字格式'
                        },
                    }
                }
            }
        });
    });