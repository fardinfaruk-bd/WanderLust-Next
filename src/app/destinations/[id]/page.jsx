import { getDestinationById } from '@/lib/data';
import { Calendar, MapPin, StarFill, TrashBin } from '@gravity-ui/icons';
import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea } from "@heroui/react";
import Image from 'next/image';
import React from 'react';
import { BiEdit, BiLeftArrow, BiSave } from 'react-icons/bi';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params
    console.log(id);

    const destination = await getDestinationById(id);

    return (
        <div className='my-10 container mx-auto'>
            <div className='flex justify-between items-center w-full'>
                <div className='text-xl flex gap-2 items-center'>
                    <BiLeftArrow /> <span>Back to Destinations</span>
                </div>
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
                                                className="p-10 space-y-8 w-3xl"

                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    {/* Destination Name */}
                                                    <div className="md:col-span-2">
                                                        <TextField name="destinationName" isRequired>
                                                            <Label>Destination Name</Label>
                                                            <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                                            <FieldError />
                                                        </TextField>
                                                    </div>

                                                    {/* Country */}
                                                    <TextField name="country" isRequired>
                                                        <Label>Country</Label>
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
                                                    <TextField name="price" type="number" isRequired>
                                                        <Label>Price (USD)</Label>
                                                        <Input
                                                            type="number"
                                                            placeholder="1299"
                                                            className="rounded-2xl"
                                                        />
                                                        <FieldError />
                                                    </TextField>

                                                    {/* Duration */}
                                                    <TextField name="duration" isRequired>
                                                        <Label>Duration</Label>
                                                        <Input
                                                            placeholder="7 Days / 6 Nights"
                                                            className="rounded-2xl"
                                                        />
                                                        <FieldError />
                                                    </TextField>

                                                    {/* Departure Date */}
                                                    <div className="md:col-span-2">
                                                        <TextField name="departureDate" type="date" isRequired>
                                                            <Label>Departure Date</Label>
                                                            <Input type="date" className="rounded-2xl" />
                                                            <FieldError />
                                                        </TextField>
                                                    </div>

                                                    {/* Image URL - Removed preview */}
                                                    <div className="md:col-span-2">
                                                        <TextField name="imageUrl" isRequired>
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
                                                        <TextField name="description" isRequired>
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
                                                <div className="flex justify-end gap-2">
                                                    <Button slot="close" variant="secondary">
                                                        Cancel
                                                    </Button>

                                                    <Button
                                                        type="submit"
                                                        variant="secondary"
                                                    >
                                                        <BiSave /> Save Changes
                                                    </Button>
                                                </div>
                                            </form>
                                        </Surface>
                                    </Modal.Body>
                                </Modal.Dialog>
                            </Modal.Container>
                        </Modal.Backdrop>
                    </Modal>
                    <Button><TrashBin /> Delete</Button>
                </div>
            </div>
            <div className='space-y-10'>
                <div>
                    <Image src={destination.imageUrl} alt={destination.destinationName} width={600} height={900} className='w-full object-cover h-100' />
                </div>
                <div className='border-b border-gray-200'></div>
                <div className="flex justify-between gap-10">
                    <div className='space-y-5'>
                        <p className='flex items-center text-[#6c696d]'><MapPin /> {destination.country}</p>
                        <h1 className='text-6xl'>{destination.destinationName}</h1>
                        <div className='flex items-center gap-2 text-[#6c696d]'>
                            <StarFill color='green' />
                            <p>4.9</p>
                            <Calendar />
                            <p>{destination.duration}</p>
                        </div>
                        <div>
                            <h2 className='text-3xl'>Overview</h2>
                            <p className='text-[#6c696d]'>{destination.description}</p>
                        </div>
                    </div>
                    <div className='space-y-5 p-5 border border-gray-200 shadow-md min-w-100'>
                        <div>
                            <p className='text-[#6c696d]'>starting from</p>
                            <p className='text-[#15a1bf] text-2xl'>${destination.price}</p>
                            <p className='text-[#6c696d]'>per person</p>
                        </div>
                        <div className='bg-gray-100 p-2'>
                            <p>{destination.departureDate}</p>
                        </div>
                        <div>
                            <Button className="bg-[#15a1bf] rounded-none text-white w-full">Book Now</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default DestinationDetailsPage;