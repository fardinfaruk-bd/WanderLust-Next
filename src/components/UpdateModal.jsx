"use client"
import { Button, FieldError, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea } from '@heroui/react';

import React from 'react';
import { BiEdit, BiSave } from 'react-icons/bi';
import { toast } from 'react-toastify';

const UpdateModal = ({ destination }) => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const destinationData = Object.fromEntries(formData);

        console.log(destinationData);
        const res = await fetch(`http://localhost:5000/destinations/${destination._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(destinationData)
        })
        const data = await res.json();

        //TODO
        if (data.modifiedCount > 0) {
            toast.success(`Successfully Update ${destinationData?.destinationName} to your destinations!`);
            window.location.reload();
        }

    }
    return (
        <div>
            <Modal >
                <Button ><BiEdit /> Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="max-w-5xl mx-auto">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <BiEdit className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Edit Destination Details</Modal.Heading>

                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form
                                        className="p-10 space-y-8 "
                                        onSubmit={onSubmit}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Destination Name */}
                                            <div className="md:col-span-2">
                                                <TextField name="destinationName" isRequired defaultValue={destination?.destinationName}>
                                                    <Label>Destination Name</Label>
                                                    <Input placeholder={destination?.destinationName} className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Country */}
                                            <TextField name="country" isRequired defaultValue={destination?.country}>
                                                <Label>{destination?.country}</Label>
                                                <Input placeholder="Indonesia" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>

                                            {/* Category - Updated Select Component */}
                                            <div>
                                                <Select
                                                    name="category"
                                                    isRequired
                                                    className="w-full"
                                                    placeholder="Select category"
                                                >
                                                    <Label>Category</Label>
                                                    <Select.Trigger className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Beach" textValue="Beach">
                                                                Beach
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Mountain" textValue="Mountain">
                                                                Mountain
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="City" textValue="City">
                                                                City
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Adventure" textValue="Adventure">
                                                                Adventure
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Cultural" textValue="Cultural">
                                                                Cultural
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Luxury" textValue="Luxury">
                                                                Luxury
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Price */}
                                            <TextField name="price" type="number" isRequired defaultValue={destination?.price}>
                                                <Label>Price (USD)</Label>
                                                <Input
                                                    type="number"
                                                    placeholder="1299"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Duration */}
                                            <TextField name="duration" isRequired defaultValue={destination?.duration}>
                                                <Label>Duration</Label>
                                                <Input
                                                    placeholder="7 Days / 6 Nights"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Departure Date */}
                                            <div className="md:col-span-2">
                                                <TextField name="departureDate" type="date" isRequired defaultValue={destination?.departureDate}>
                                                    <Label>Departure Date</Label>
                                                    <Input type="date" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Image URL - Removed preview */}
                                            <div className="md:col-span-2">
                                                <TextField name="imageUrl" isRequired defaultValue={destination?.imageUrl}>
                                                    <Label>Image URL</Label>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://example.com/bali-paradise.jpg"
                                                        className="rounded-2xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Description */}
                                            <div className="md:col-span-2">
                                                <TextField name="description" isRequired defaultValue={destination?.description}>
                                                    <Label>Description</Label>
                                                    <TextArea
                                                        placeholder="Describe the travel experience..."
                                                        className="rounded-3xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        =<Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type='submit' slot="close">Save</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default UpdateModal;