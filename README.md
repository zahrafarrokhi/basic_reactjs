####  solving git problems
* 1
warning: adding embedded git repository: basic_reactjs
You've added another git repository inside your current repository.
* solution
You were already in a Git repo when you ran npm create-react-app …. This creates a new React app in a new Git repo.
```jsx
1.cd __props_children
2.ls -alh
3.we have .git folder (rm -rf .git)

```
```jsx
git init
git commit -m "first commit"
git branch -M main

```

* 2.(git branch -M main)
error: refname refs/heads/master not found
fatal: Branch rename failed
* solution
```jsx
git checkout -b main
```
```jsx
git remote add origin git@github.com:zahrafarrokhi/basic_reactjs.git
git add -A
git commit -m "add basic"
git push -u origin main

```
