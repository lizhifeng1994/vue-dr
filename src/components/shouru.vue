<template>
<div class="container">

    <!-- 路径导航-->
    <div class="col-lg-offset-2  col-lg-8">
        <nav class="navbar-default">
            <ol class="breadcrumb">
                <li><span class="glyphicon glyphicon-home"></span><a>Home</a></li>
                <li><a href="/">我的生活账本</a></li>
                <li class="active">收入</li>
            </ol>
        </nav>
    </div>

    <!-- 收入表单-->
    <div class="col-lg-offset-2 col-lg-5">
        <form class="form-horizontal" method="post" id="zhichuForm">
            <div class="form-group">
                <div class="col-lg-5 col-lg-offset-2">
                    <div class="input-group">
                        <span class="input-group-addon"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span></span>
                        <input type="text" name="hfplace" class="form-control" placeholder="地点">
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="input-group date comm_datetime"  data-date-format="dd MM yyyy" data-link-field="dtp_input1">
                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        <input class="form-control" type="text" value="" data-date="" data-date-format="dd MM yyyy" readonly>
                        <!-- 后台获取数据的-->
                        <input type="hidden" name="hfdate" id="dtp_input1" value="" />
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-lg-2 control-label">*分类</label>
                <div class="col-lg-10">
                    <select class="form-control" name="hfkind">
                        <option value="">-------------------------请选择-------------------------</option>
                        <option value="1">工资</option>
                        <option value="2">补贴</option>
                        <option value="3">项目奖金</option>
                        <option value="6">其他</option>
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label class="col-lg-2 control-label">*收入</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" name="hfcontent" />
                </div>
            </div>

            <div class="form-group">
                <label class="col-lg-2 control-label  col-lg-offset-0">*金额</label>
                <div class="col-lg-5">
                    <div class=" input-group">
                        <input type="text" class="form-control" name="hfmoney" />
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button">元</button>
                            </span>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-lg-2 control-label">备注</label>
                <div class="col-lg-10">
                    <textarea class="form-control" name="hfmark" rows="5"></textarea>
                </div>
            </div>

           <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                    <label>
                        <input type="checkbox" class="checkbox-inline" value="1" name="hfstar">
                        <span class="label label-danger">标注此账目</span>
                    </label>
                    <button type="button" onclick="validateSubmit()" style="margin-left: 20px" id="validateBtn" class="btn btn-primary">保存</button>
                    <button type="button" onclick="clean()" style="margin-left: 10px" class="btn btn-primary">撤销</button>
                    <span class="label label-danger col-lg-offset-1">*为必填项</span>
                </div>
            </div>
        </form>
    </div>

    <!-- 左侧收入列表-->
    <div class="col-lg-offset-0  col-lg-3">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <span style="margin-left: 10px;" id="show_hf_date"  data-link-field="dtp_input2" class="input-append date shouru_datetime">本月收入</span>
                <input type="hidden" id="dtp_input2" value="" readonly>
                <strong class="pull-right" id="total_money">总计：0.00元</strong>
            </div>
            <div class="panel-body list-group">

                    <li class="list-group-item"  style="overflow:hidden;" >
                        <b>100</b>
                        <span class="label label-danger pull-right">+100元</span>
                    </li>
                <div class="pull-right">
                    <ul class="pagination pagination-sm" style="margin-bottom: 0px;">
                        <li><a href="#">&uparrow;</a></li>
                        <li><a href="#">&downarrow;</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>