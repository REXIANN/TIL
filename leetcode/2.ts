// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carriage = false;
    let listNode = new ListNode()
    const answerNode = listNode

    let list1 = l1
    let list2 = l2

    while(true) {
        const newNode = new ListNode()

        const value1 = list1?.val ?? 0;
        const value2 = list2?.val ?? 0;
        let value = value1 + value2

        if (carriage) {
            value += 1
            carriage = false
        }

        if (value >= 10) {
            carriage = true
            value = value % 10
        }

        newNode.val = value;
        newNode.next = null;

        listNode.next = newNode;

        listNode = newNode;

        list1 = list1?.next
        list2 = list2?.next

        if (list1?.val == null && list2?.val == null){
            break;
        }
    }

    if (carriage) {
        const lastNode = new ListNode()
        lastNode.val = 1
        listNode.next = lastNode;
    }

    return answerNode.next
};