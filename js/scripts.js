// create an array with 4 trees listed
const trees = ['Oak', 'Pine', 'Aspen', 'Bald Cypress']

const errorElement = document.querySelector('#error')

const displayResults = document.querySelector('#displayResults')

// display the list of trees inside the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()

//concise version of add a redwood to the end
document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

//add pear to the end
document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
}

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'I cannot remove the first tree cause there are NO TREES'
    }
}

document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 0) {
        trees.splice(1, 1)
        listTrees()
    } else {
        errorElement.textContent = 'I cannot remove the second tree cause there are NO SECOND TREES'
    }
}

document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'I cannot remove the last tree cause there is NO LAST TREE'
    }
}

document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

document.querySelector('#lowerTrees').onclick = () => {
    cnt = -1;
  trees.forEach(tree => {
    tree = tree.toLowerCase();
    trees.splice((cnt += 1), 1, tree);
  });
  listTrees();
  if (trees.length == 0) {
    errorElement.textContent = "There are no trees to make lower case";
  }
};
    

document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
        displayResults.textContent = trees[2]
    } else {
        errorElement.textContent = "There is no third tree"
    }
}

document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3) {
        displayResults.textContent = trees[3]
    } else {
        errorElement.textContent = "There is no fourth tree"
    }
}