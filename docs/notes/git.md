# git

## 1. 配置用户信息

```git
git config --global user.name "name"
git config --global user.email "youremail@example.com"
```

## 2. 生成 SSH Key

```sh
ssh-keygen -t rsa -C "youremail@example.com"
```

## 3. 创建版本库

```sh
git init # 初始化本地仓库
```

## 4. 修改和提交

```sh
git status # 查看状态
git diff # 查看修改内容
git add <file> # 添加到暂存区
git add . # 添加所有修改到暂存区
git rm <file> # 删除文件
git rm --cached <file> # 从暂存区删除文件
git commit -m "message" # 提交到本地仓库
git commit -a -m "message" # 跳过暂存区直接提交到本地仓库
git commit --amend -m "message" # 修改最后一次提交
```

## 5. 查看提交历史

```sh
git log # 查看提交历史
git reflog # 查看命令历史
git log -p <file> # 查看指定文件的提交历史
git blame <file> # 查看指定文件的提交历史（按行）
```

## 6. 撤销操作

```sh
git reset --hard HEAD^ # 回退到上一个版本
git reset --hard HEAD~100 # 回退到前 100 个版本
git reset --hard <commit_id> # 回退到指定版本
git checkout -- <file> # 撤销工作区的修改
git reset HEAD <file> # 撤销暂存区的修改
git revert <commit_id> # 撤销指定提交
```

## 7. 分支管理

```sh
git branch # 查看分支
git branch <name> # 创建分支，name 为分支名
git branch -d <name> # 删除分支
git checkout <name> # 切换分支
git checkout -b <name> # 创建并切换分支
git merge <name> # 合并指定分支到当前分支
```

## 8. 标签管理

```sh
git tag # 查看标签
git tag <name> # 创建标签，name 为标签名
git tag -a <name> -m "message" # 创建带注释的标签
git tag -d <name> # 删除标签
git show <name> # 查看标签信息
git push origin <name> # 推送标签到远程
git push origin --tags # 推送所有标签到远程
git push origin :refs/tags/<name> # 删除远程标签
```

## 9. 暂存工作现场

```sh
git stash # 暂存工作现场
git stash list # 查看暂存列表
git stash apply # 恢复暂存的工作现场
git stash drop # 删除暂存的工作现场
git stash pop # 恢复的同时删除暂存的工作现场
```

## 10. 远程仓库

```sh
git remote # 查看远程仓库
git remote -v # 查看远程仓库详细信息
git remote add <name> <url> # 添加远程仓库，<name> 为远程仓库的名字，<url> 为远程仓库的地址
git remote rm <name> # 删除远程仓库
git push <remote> <branch> # 推送到远程仓库
git push -u <remote> <branch> # 推送到远程仓库并关联
git push <remote> :<branch/tag-name> # 删除远程分支或标签
git pull <remote> <branch> # 拉取远程仓库，等同于 git fetch + git merge
git fetch <remote> <branch> # 拉取远程仓库
git clone <url> # 克隆远程仓库
```
