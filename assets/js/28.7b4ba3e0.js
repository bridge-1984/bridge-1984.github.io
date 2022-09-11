(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{420:function(t,_,v){"use strict";v.r(_);var i=v(1),e=Object(i.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"git最基本操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git最基本操作"}},[t._v("#")]),t._v(" git最基本操作")]),t._v(" "),_("p",[t._v("git操作主要涉及以下4个关键点")]),t._v(" "),_("ol",[_("li",[t._v("工作区（workspace）：电脑本地的项目文件夹；")]),t._v(" "),_("li",[t._v("暂存区（Index/Stage）：用git管理项目文件时，项目文件中会自动创建一个 "),_("code",[t._v(".git")]),t._v(" 文件夹，该文件夹中包含两部分，其中一部分即为暂存区，通常使用 add 命令将指定文件添加到暂存区；")]),t._v(" "),_("li",[t._v("本地仓库（Repository）："),_("code",[t._v(".git")]),t._v(" 文件夹的另一个部分，即 git 自动创建的 master 分支。一般使用 commit 命令将暂存区文件添加到本地仓库；")]),t._v(" "),_("li",[t._v("远程仓库（Remote）：项目在远程 git 服务器上的存放位置，如通常使用的 github 仓库。可使用 clone 命令将项目从远程仓库克隆到本地仓库中， 也可使用 push 命令将本地项目推送到远程仓库。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/79df9184c0584ac98a5af620fdf183c3.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5LiJ5YiG54Ot5bqm55qE5Y-M5a2Q,size_17,color_FFFFFF,t_70,g_se,x_16",alt:""}})]),t._v(" "),_("p",[t._v("依据操作涉及区域的不同，可将命令分为以下几类：")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("git 配置命令")])])]),t._v(" "),_("ul",[_("li",[t._v("列出当前配置："),_("code",[t._v("git config --list")])]),t._v(" "),_("li",[t._v("配置用户名："),_("code",[t._v('git config --global user.name "你的用户名"')])]),t._v(" "),_("li",[t._v("配置邮箱："),_("code",[t._v('git config --global user.email "你的邮箱"')])])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("strong",[t._v("工作区操作")])])]),t._v(" "),_("ul",[_("li",[t._v("为工作区的项目创建一个新的本地仓库："),_("code",[t._v("git init")])]),t._v(" "),_("li",[t._v("从远程仓库复制项目："),_("code",[t._v("git clone 远程仓库的url [项目别名]（可选）")])]),t._v(" "),_("li",[t._v("提交工作区文件到暂存区 "),_("code",[t._v("git add 文件/文件夹")])]),t._v(" "),_("li",[t._v("查询当前工作区所有文件的状态："),_("code",[t._v("git status")])])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[_("strong",[t._v("暂存区操作")])])]),t._v(" "),_("ul",[_("li",[t._v("将暂存区中的文件提交到本地仓库："),_("code",[t._v('git commit -m "注释"')])]),t._v(" "),_("li",[t._v("撤销上一次提交："),_("code",[t._v("git commit --amend")])])]),t._v(" "),_("blockquote",[_("p",[t._v("分支相关操作")])]),t._v(" "),_("ul",[_("li",[t._v("创建分支："),_("code",[t._v("git branch 分支名")])]),t._v(" "),_("li",[t._v("切换到其他分支："),_("code",[t._v("git checkout 分支名")])]),t._v(" "),_("li",[t._v("删除分支："),_("code",[t._v("git branch -d 分支名")])]),t._v(" "),_("li",[t._v("合并当前分支和指定分支："),_("code",[t._v("git merge 分支名")])]),t._v(" "),_("li",[t._v("查看本地仓库所有分支："),_("code",[t._v("git branch")])])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[_("strong",[t._v("本地仓库操作")])])]),t._v(" "),_("ul",[_("li",[t._v("查看本地仓库关联的远程仓库："),_("code",[t._v("git remote -v")])]),t._v(" "),_("li",[t._v("添加远程仓库："),_("code",[t._v("git remote add [仓库别名] 远程仓库url")])]),t._v(" "),_("li",[t._v("拉取远程分支并自动合并："),_("code",[t._v("git pull")])]),t._v(" "),_("li",[t._v("推送本地仓库的某个分支到远程仓库："),_("code",[t._v("git push 远程仓库名 分支名")])]),t._v(" "),_("li",[t._v("移除远程仓库："),_("code",[t._v("git remote rm 远程仓库名")])])]),t._v(" "),_("p",[t._v("如果想要在用 git 对项目进行管理时忽略某些文件，可在 "),_("code",[t._v(".gitignore")]),t._v(" 文件中将对应文件或文件夹的路径添加进去")]),t._v(" "),_("blockquote",[_("p",[t._v("参考资料")])]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[t._v("廖雪峰老师的博客"),_("OutboundLink")],1),_("br"),t._v(" "),_("a",{attrs:{href:"https://juejin.cn/post/6844903598522908686",target:"_blank",rel:"noopener noreferrer"}},[t._v("git基本操作，一篇文章就够了"),_("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=e.exports}}]);