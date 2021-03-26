/**
 * 
 * @param { Array | Array_like_obj } arr
 * @param { String } attr 指定依据属性排序
 * @param { String } type 属性类型
 * @returns { Array }  sorted arr
 */
export function sortArrOrArrLikeObj(arr,attr,type){
    arr = Array.from(arr);
    if (arr == []) return

    let arrnew = []
    if (type === "date"){
        arrnew = arr.sort(
            (item1, item2)=>{
                let num1 = +(item1[attr].replace(/-/g, ''))
                let num2 = +(item2[attr].replace(/-/g, ''))
                return num1 - num2
            }
        )
    }else if(type === "number"){
        arrnew = arr.sort(
            (item1, item2) => {
                return item1[attr] - item2[attr]
            }
        )
    } else{
        arrnew = arr.sort()
    }

    return arrnew
}


