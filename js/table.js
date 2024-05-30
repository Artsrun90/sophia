$(document).ready(function () {
    const treevew1Id = '#tree-view-1';
    const treevew2Id = '#tree-view-2';
    const treevew3Id = '#tree-view-3';
    const treevew4Id = '#tree-view-4';
    const treevew5Id = '#tree-view-5';
    const treevew1 = new TreeSortable({
      treeSelector: treevew1Id,
      maxLevel: 1
    });
    const treevew2 = new TreeSortable({
      treeSelector: treevew2Id,
      maxLevel: 1
    });
    const treevew3 = new TreeSortable({
      treeSelector: treevew3Id,
      maxLevel: 1
    });
    const treevew4 = new TreeSortable({
      treeSelector: treevew4Id,
      maxLevel: 1
    });
    const treevew5 = new TreeSortable({
      treeSelector: treevew5Id,
      maxLevel: 1
    });
    treevew1.run();
    treevew2.run();
    treevew3.run();
    treevew4.run();
    treevew5.run();
  
    treeOptions(treevew1, treevew1Id)
    treeOptions(treevew2, treevew2Id)
    treeOptions(treevew3, treevew3Id)
    treeOptions(treevew4, treevew4Id)
    treeOptions(treevew5, treevew5Id)
})