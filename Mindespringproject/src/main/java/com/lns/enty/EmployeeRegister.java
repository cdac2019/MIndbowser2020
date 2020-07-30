package com.lns.enty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;


//Employee Detail class
@Entity
@Table(name="Employee_Reg")
public class EmployeeRegister {
	@Id
	private String empid;
	@NotNull
	@NotBlank(message = "FristName may not be null")
	private String fristname;
	@Column(name = "lastname")
	@NotBlank(message = "LastName may not be null")
	private String lastname; 
	@NotBlank(message = "Address may not be null")
	private String address;
	@NotBlank(message = " Birth of date may not be null")
	private String dob;
	@Size(min=10,max=12)
	private long mobile;
	@NotBlank(message = "city may not be null")
	private String city;
	public String getEmpid() {
		return empid;
	}
	public void setEmpid(String empid) {
		this.empid = empid;
	}
	public String getFristname() {
		return fristname;
	}
	public void setFristname(String fristname) {
		this.fristname = fristname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
}
