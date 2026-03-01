# IT-clubAndFriends

just a simple public repository for doing passion projects with friends

Before starting the build here is a bit of info required before starting on this we should remember the following advices

Collaboration Tips (for you and your friends)

    Pull before you start: git pull origin main ensures you're working on the latest version.

    Use branches for new features:
    #**bash**#

    git checkout -b feature-login-page
    # make changes, commit, push
    git push origin feature-login-page

    Then open a Pull Request on GitHub to merge into main. This lets others review and avoids conflicts.

    Communicate: Let your teammates know what you're working on to avoid overlapping efforts.

some important bits of info
First-Time Git Setup (if you haven't already)

Open your terminal (Command Prompt, Git Bash, or Terminal) and tell Git who you are:
bash

git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

Use the same email you used for your GitHub account. 2. Get the Repository onto Your Computer

You have two scenarios:
A) You already created an empty repository on GitHub

Click the green Code button on your GitHub repo page, copy the URL (HTTPS or SSH), then in your terminal run:
bash

git clone <paste-the-url-here>

This downloads the repo to your computer. Then move into that folder:
bash

cd name-of-repo

B) You have a local project and want to connect it to a new GitHub repo

Inside your project folder, run:
bash

git init
git remote add origin <repository-url>

3. The Basic Workflow: Add / Update Files

Once your local folder is connected to GitHub, here’s the typical cycle:
Step 1 – Check what’s changed
bash

git status

This shows which files are new, modified, or deleted.
Step 2 – Stage the files you want to save
bash

git add filename.txt # stage one specific file
git add . # stage all changes in the current folder

“Staging” means telling Git which changes you want to include in your next snapshot.
Step 3 – Commit the changes with a message
bash

git commit -m "Describe what you changed"

This creates a snapshot (a “commit”) of your staged changes.
Step 4 – Upload (push) your commits to GitHub
bash

git push origin main

If your default branch is called master, replace main with master.

    First push after cloning an empty repo might need:
    bash

    git push -u origin main

    The -u sets the upstream, so later you can just type git push.

4. Keep Your Local Copy Up to Date

Before you start making new changes, it’s a good habit to download any updates from GitHub:
bash

git pull origin main

This avoids conflicts when you try to push later. 5. Authentication (How GitHub knows it’s you)

GitHub no longer accepts account passwords for Git operations. You have two easy options:

    Personal Access Token (PAT):
    Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic). Generate one with repo access, and use it as your password when prompted.

    GitHub CLI:
    Install gh and run gh auth login – it handles everything.

    SSH keys (more advanced but secure):
    You can set up an SSH key and use the SSH URL when cloning.

6. A Real Example

Let’s say you have a repo on GitHub called my-first-repo. You want to add a new file notes.txt.
bash

# Clone the repo

git clone https://github.com/your-username/my-first-repo.git
cd my-first-repo

# Create or edit a file

echo "Hello GitHub" > notes.txt

# Check status (notes.txt will appear in red)

git status

# Stage the file

git add notes.txt

# Commit it

git commit -m "Add notes.txt"

# Push to GitHub

git push origin main

If you later edit notes.txt, just repeat the add → commit → push steps. 7. What If Something Goes Wrong?

    Merge conflicts: If git pull says there’s a conflict, Git will mark the files. You’ll need to open them, look for <<<<<<<, decide which changes to keep, save, then git add and git commit to finish the merge.

    Forgot to pull before pushing: You might get a “non-fast-forward” error. Just run git pull first, resolve any conflicts, then push again.

Summary of Essential Commands
Command What it does:

git status--------------------------Shows current state of files
git add <file>----------------------Stages a file for commit
git commit -m "message"-------------Creates a snapshot with a description
git push origin main----------------Uploads your commits to GitHub
git pull origin main----------------Downloads latest changes from GitHub
git clone <url>---------------------Copies a remote repo to your computer
