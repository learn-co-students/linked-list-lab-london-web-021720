  function getName(node) {
      return node.name
  }

  function headNode(linkedList, collection) {
      return collection[linkedList]
  }

  function next(head, collection) {
      let nextNode = head.next
      return collection[nextNode]
  }

  function nodeAt(index, linkedList, collection) {
      let result = headNode(linkedList, collection)
      if (index === 0) {
            return result
      } else {
        for (let i = 0; i < index ; i++) {
            result = next(result, collection)
        }
      }
      return result
  }

  function addressAt(index, linkedList, collection) {
    let result = headNode(linkedList, collection)
    let answer = linkedList
    if (index === 0) {
        return answer
  } else {
    for (let i = 0; i < index ; i++) {
        answer = result.next
        result = next(result, collection)
    }
  }
  return answer
  }

  function indexAt(node, collection, linkedList) {
      let result = 0
      let answer = headNode(linkedList, collection)
      while (node !== answer) {
          answer = next(answer, collection)
          result = result + 1
      }
      return result
  }

  function insertNodeAt(index, address, linkedList, collection) {
      let head = headNode(linkedList, collection)
      let current = head
      let newNode = collection[address]
      if (index === 0) {
          newNode.next = linkedList
      } else {
          for (let i = 0; i < index; i++) {
              head = current
              current = next(current, collection)
          }
          newNode.next = head.next
          head.next = address
      }
  }

  function deleteNodeAt(index, linkedList, collection) {
    let head = headNode(linkedList, collection)
    let current = head
    if (index === 0) {

    } else {
        for (let i = 0; i < index; i++) {
            head = current
            current = next(current, collection)
        }
        head.next = current.next
    }
  }

//   describe('#deleteNodeAt', function() {
//     it("should set the next property of the node previous to the deleted node", function() {
//       let firstNode = {name: 'susie', next: 'rkjasj'}
//       let secondNode = {name: 'sam', next: 'asnan'}
//       let newNode = {name: 'jill', next: ''}
//       let lastNode = {name: 'charlie', next: null}
//       let collection = {rkjasj: secondNode,
//         asnan: lastNode,
//         whana: firstNode,
//         ajhsak: newNode}
//         let linkedList = 'whana'
//         deleteNodeAt(1, linkedList, collection)
//         expect(firstNode.next).toEqual('asnan')
//       })
  
//       it("should delete the node at the provided index, while maintaining order of all the other nodes", function() {
//         let firstNode = {name: 'susie', next: 'rkjasj'}
//         let secondNode = {name: 'sam', next: 'asnan'}
//         let lastNode = {name: 'charlie', next: null}
//         let collection = {rkjasj: secondNode,
//           asnan: lastNode,
//           whana: firstNode}
  
//           let linkedList = 'whana'
  
//         deleteNodeAt(1, linkedList, collection)
//         expect(nodeAt(0, linkedList, collection)).toEqual(firstNode)
//         expect(nodeAt(1, linkedList, collection)).toEqual(lastNode)
  