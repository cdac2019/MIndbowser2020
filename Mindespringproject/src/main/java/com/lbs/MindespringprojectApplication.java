package com.lbs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages= {"com.lbs.restt","com.lbs.repositery","com.lns.enty"})
@EntityScan(basePackages= {"com.lns.enty"})
public class MindespringprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(MindespringprojectApplication.class, args);
		System.out.println("Running");
	}

}
