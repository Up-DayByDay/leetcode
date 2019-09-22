/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let res=[];
    inOrder(root);//中序遍历  输出所有节点 理想状态下  是回文
    // console.log(res)
    if(res.length%2===0&&root) return false; //如果树的节点数是偶数(排除0) 返回false;
    
    //用首尾双指针判断是否回文数组:
    let i=0;
    let j=res.length-1;
    while(i < j){
          //有不满足条件的组  返回false
          if(res[i].val!=res[j].val||res[i].pos===res[j].pos) return false;    
          i++;
          j--;
    }
    //没有不满足的情况  返回true
    return true;
    //中序遍历: 对称树必定会输出一个回文数组,再加上节点的位置标记,可以过滤掉形如示例二的树
    function inOrder(root,pos=NaN){
        if(root!=null){
        inOrder(root.left,'l')
        res.push({val:root.val,pos});console.log(root.val);
        inOrder(root.right,'r')
      }
    }
};