package com.lbs.repositery;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lns.enty.EmployeeRegister;
import com.lns.enty.ManagerRegister;
 

 

@Repository
public class RepositeryMB {
	 
		@PersistenceContext()
		private EntityManager entitymanager;

		// create Manager Register or Insert Manager Details
		@Transactional
		public void save(ManagerRegister reg) {
			// TODO Auto-generated method stub
			entitymanager.merge(reg);
			
		}
		 // valid Manager Login
		public long isValidUser(String email,String password) {
			return (long)entitymanager.createQuery("select count(r) from ManagerRegister r where r.email = :email and r.password = :pwd")										
					.setParameter("email", email)
					.setParameter("pwd", password).getSingleResult();
			
		}
		//Login Manager account 
		public ManagerRegister fetch(String email, String password) {
			return (ManagerRegister)entitymanager.createQuery("select r from ManagerRegister r where r.email =:email and r.password= :pwd")
					.setParameter("pwd", password)
					.setParameter("email",email)
					.getSingleResult();

			// TODO Auto-generated method stub
			 
		}
		//Insert Employee Details
		@Transactional
		public void empsave(EmployeeRegister reg) {
			// TODO Auto-generated method stub
			entitymanager.merge(reg);
		}
		//Display list of Emplyees
		public List<EmployeeRegister> emplist(){
			return  entitymanager.createQuery("select f from EmployeeRegister f").getResultList();
		}
		
		//Delete Employee Details
		@Transactional
		public void delete123(String reg) {
			// TODO Auto-generated method stub
			entitymanager.createQuery("delete EmployeeRegister where empid=:empid ")
			.setParameter("empid",reg)
			.executeUpdate();
		}
		
		//Update Employee detaile
		@Transactional
		public void update(String fristname,String lastname, String address, String city, String empid,String dob,long mobile) {
			// TODO Auto-generated method stub
			entitymanager.createQuery("Update  EmployeeRegister dm set dm.fristname=:fristname , dm.lastname=:lastname ,dm.address=:address, dm.city=:city,dm.dob=:dob, dm.mobile=:mobile where dm.empid=:empid")
			.setParameter("empid",empid)
			.setParameter("fristname",fristname)
			.setParameter("lastname",lastname)
			.setParameter("address",address)
			.setParameter("city",city)
			.setParameter("mobile",mobile)
			.setParameter("dob",dob).executeUpdate();
			
		}
		
	 
	}
