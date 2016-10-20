<template>
	<div class="container">
    <!-- 导航条-->
    <div class="col-lg-offset-2  col-lg-8">
        <nav class="navbar-default">
            <ol class="breadcrumb">
                <li><span class="glyphicon glyphicon-home"></span><a href="#">Home</a></li>
                <li><a href="/">我的生活账本</a></li>
                <li class="active">支出分析</li>
            </ol>
        </nav>
    </div>


    <div class="col-lg-offset-2  col-lg-8">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <span>统计图表</span>
            </div>
            <div class="panel-body">
                <div class="form-group col-lg-12">
                    <div class="col-lg-1" style="margin-top: 10px;">
                        <span class="label label-danger">时间</span>
                    </div>
                    <div class="col-lg-5 col-lg-offset-0">
                        <div class="input-group date form_datetime"  data-date-format="dd MM yyyy" data-link-field="dtp_input1">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                            <input class="form-control" type="text" value="" data-date="" data-date-format="dd MM yyyy" readonly>
                            <!-- 后台获取数据的-->
                            <input type="hidden" name="hfdate" id="dtp_input1" value="" />
                        </div>
                    </div>
                    <div class="col-lg-1">
                        <span class="glyphicon glyphicon-arrow-left"></span>
                        <span class="glyphicon glyphicon-arrow-right"></span>
                    </div>
                    <div class="col-lg-5">
                        <div class="input-group date form_datetime"  data-date-format="dd MM yyyy" data-link-field="dtp_input2">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                            <input class="form-control" type="text" value="" data-date="" data-date-format="dd MM yyyy" readonly>
                            <!-- 后台获取数据的-->
                            <input type="hidden" name="hfdate" id="dtp_input2" value="" />
                        </div>
                    </div>
                </div>

                <div class="form-group col-lg-12">
                    <div class="col-lg-1" style="margin-top: 10px;">
                        <span class="label label-danger">支付</span>
                    </div>
                    <ul class="nav nav-pills small" style="margin-left: 60px; margin-top: 60px" role="tablist">
                        <li role="presentation"><a href="#">一日三餐</a></li>
                        <li role="presentation"><a href="#">日常用品</a></li>
                        <li role="presentation"><a href="#">衣着</a></li>
                        <li role="presentation"><a href="#">生活其他</a></li>
                        <li role="presentation"><a href="#">书籍</a></li>
                        <li role="presentation"><a href="#">全选</a></li>
                    </ul>
                </div>

                <div class="form-group col-lg-12">
                    <div class="col-lg-1"  style="margin-top: 10px;">
                        <span class="label label-danger">图表</span>
                    </div>
                    <ul class="nav nav-pills small" style="margin-left: 60px;" role="tablist">
                        <li role="presentation"><a href="#">曲线图</a></li>
                        <li role="presentation"><a href="#">饼图</a></li>
                        <li role="presentation"><a href="#">柱形图</a></li>
                        <li role="presentation"><a href="#">折线图</a></li>
                        <li role="presentation"><a href="#">组合图</a></li>
                        <li role="presentation"><a href="#">全选</a></li>
                    </ul>
                </div>

                <div class="form-group col-lg-12">
                    <div class="col-lg-10 col-lg-offset-4">
                        <button type="submit"  class="btn btn-primary">确定</button>
                        <button type="submit"  class="btn btn-primary col-lg-offset-1">重选</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="container" style="width: 550px; height: 400px; margin: 0 auto"></div>
</div>
</template>
