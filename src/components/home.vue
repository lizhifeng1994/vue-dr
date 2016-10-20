<template>
	<div class="container">
        <!-- 支出收入分析 -->
        <div class="col-lg-offset-2  col-lg-8">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <nav>
                        <ul class="nav nav-tabs pull-right">
                            <li>
                                <!-- Single button -->
                                <div class="btn-group">
                                    <button  type="button" id="dropdownMenu2" class="btn btn-default btn-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        整体收入分析
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li><a href="#">月分析</a></li>
                                        <li><a href="#">季度分析</a></li>
                                        <li><a href="#">年度分析</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <div class="btn-group">
                                    <button type="button"  id="dropdownMenu1"  class="btn btn-default btn-warning" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        整体支出分析 <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li><a href="/zcAnalysis">月分析</a></li>
                                        <li><a href="/zcAnalysis">季度分析</a></li>
                                        <li><a href="/zcAnalysis">年度分析</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="btn-group" role="group" style="margin-left: 10px;">
                                    <button type="button" class="btn btn-default" onclick="javascript:window.location.href='/shouru';">
                                        <span class="glyphicon glyphicon-plus" style="margin-right: 10px;"></span>收入
                                    </button>
                                    <button type="button" class="btn btn-default" onclick="javascript:window.location.href='/zhichu';">
                                        <span class="glyphicon glyphicon-minus" style="margin-right: 10px;"></span>支出
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                <h4>我的生活账本</h4>
            </div>
        </div>
        
        <!-- 支出、收入、账目数目 -->
        <div  class="col-lg-offset-0  col-lg-12 jumbotron" style="height:170px">
            <div class="row col-lg-offset-1">
                 <div class="col-sm-6 col-md-4">
                    <div class="caption">
                        <h3>累计支出</h3>
                        <p><h2 style="color: #ff254a">-80</h2></p>
                    </div>
                 </div>
                 <div class="col-sm-6 col-md-4">
                    <div class="caption">
                        <h3>累计收入</h3>
                        <p><h2 style="color: #09b4ff">+200</h2></p>
                    </div>
                 </div>
                 <div class="col-sm-6 col-md-4">
                     <div class="caption">
                        <h3>账目数</h3>
                        <p><h2>123</h2></p>
                    </div>
                 </div>
            </div>
        </div>
        <!-- 选择 -->
        <div>
            <ul class="nav navbar-header">
                <li class="dropdown">
                    <a href="#" id="myTabDrop1" class="dropdown-toggle"
                       data-toggle="dropdown">我的标注账目
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1">
                        <li><a href="#jmeter" tabindex="-1" data-toggle="tab">收入</a></li>
                        <li><a href="#ejb" tabindex="-1" data-toggle="tab">支出</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- 我的标注账目 -->
        <div>
            <table class="table table-hover text-center">
                 <tbody>
                    <td><strong>时间</strong></td>
                    <td><strong>消费内容</strong></td>
                    <td><strong>类别</strong></td>
                    <td><strong>金额</strong></td>
                    <td><strong>操作</strong></td>
                    <tr>
                        <td>2016/10/19</td>
                        <td>兰州拉面</td>
                        <td>支出</td>
                        <td><button type="button" class="btn btn-xs btn-danger">-190元</button></td>
                        <td>
                            <button type="button" class="btn btn-xs btn-primary">查看详细</button>
                            <button type="button" class="btn btn-xs btn-danger">取消标记</button>
                        </td>
                    </tr>
                     <tr>
                        <td>2016/10/19</td>
                        <td>还款</td>
                        <td>支出</td>
                        <td><button type="button" class="btn btn-xs btn-danger">-500元</button></td>
                        <td >
                            <button type="button" class="btn btn-xs btn-primary">查看详细</button>
                            <button type="button" class="btn btn-xs btn-danger">取消标记</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                <td colspan="4"></td>        
                    <nav>
                    <ul class="pagination">
                        <li><a href="#">&laquo;</a></li>
                        <li><a href="#">&raquo;</a></li>
                    </ul>
                    </nav>
                </tfoot>
            </table>
        </div>
	</div>
</template>