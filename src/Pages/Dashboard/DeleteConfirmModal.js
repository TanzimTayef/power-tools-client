import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingUser, setOrders, setDeletingUser }) => {
    
    const { toolsName, _id } = deletingUser;
    
    const handleDelete = (id) => {
          const url = `https://young-springs-65716.herokuapp.com/order/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
                toast("Order deleted")
                setDeletingUser(null)
              const remaining = deletingUser.filter((order) => order._id !== id);
              setOrders(remaining);
            });
       
      };


    return (
        <div>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure want to delete {toolsName}</h3>
            <p class="py-4">If you delete! could not get again!!</p>
                    <div class="modal-action">
                    <td><button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm">Delete User</button></td>
              <label for="my-modal-6" class="btn btn-warning btn-sm">Cancel</label>
            </div>
          </div>
        </div>
       </div>
    );
};

export default DeleteConfirmModal;