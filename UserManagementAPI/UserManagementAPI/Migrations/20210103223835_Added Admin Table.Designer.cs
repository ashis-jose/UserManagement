﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using UserManagementAPI.Models;

namespace UserManagementAPI.Migrations
{
    [DbContext(typeof(UserDetailContext))]
    [Migration("20210103223835_Added Admin Table")]
    partial class AddedAdminTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("UserManagementAPI.Models.AdminDetail", b =>
                {
                    b.Property<int>("AdminId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("AdminEmail")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("AdminPassword")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("AdminId");

                    b.ToTable("AdminDetails");
                });

            modelBuilder.Entity("UserManagementAPI.Models.UserDetail", b =>
                {
                    b.Property<int>("UserDetailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Active")
                        .HasColumnType("nvarchar(3)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(250)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(40)");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(40)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("UserDetailId");

                    b.ToTable("UserDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
